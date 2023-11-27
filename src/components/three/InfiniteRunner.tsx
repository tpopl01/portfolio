import { Canvas } from "@react-three/fiber"
import {useEffect, useState} from "react"
import RunnerShape from "./RunnerShape";
import { useKeyPress } from "../hooks/useKeyPress";
import useTimeout from "../hooks/useTimeout";
import styles from "../styles/InfiniteRunner.module.css"
interface IProps{
  isHidden:boolean
}

const InfiniteRunner = (props:IProps) => {
    const [speed, setSpeed] = useState<number>(0.01);
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const [obstacleCount, setObstacleCount] = useState<number>(1);
    const [playerPos, setPlayerPos] = useState<number>(0);
    const [obstacles,setObstacles] = useState<Array<JSX.Element>>([]);
    const [enemyPos, setEnemyPos] = useState<number>(10);
    const { reset:resetSpeedTimer } = useTimeout(() => {if(!props.isHidden){setSpeed(Math.min(speed+0.001,0.3)); setScore(score+1);} resetSpeedTimer()}, 5000);
    const { reset:resetObstacleTimer } = useTimeout(() =>{if(!props.isHidden){setObstacleCount(prev=>Math.min(8,prev+1));} resetObstacleTimer()}, 10000);

    useKeyPress(() => { SetPlayerPos(1);}, ["KeyD"]);
    useKeyPress(() => {  SetPlayerPos(-1);}, ["KeyA"]);

    useEffect(()=>{
        setObstacles(Obstacles());
    }, [obstacleCount]);

    useEffect(()=>{
        if(enemyPos < 10){
            DetectCollision(enemyPos);
            setEnemyPos(10);
        }
    },[enemyPos]);

    function SetPlayerPos(amount:number)
    {
        setPlayerPos(prev=>Math.max(Math.min((prev + amount),1),-1));
    }

    function Reset(){
      if(props.isHidden){
        return;
      }
      if(score > highScore){
          setHighScore(score);
      }
      resetObstacleTimer();
      resetSpeedTimer();
      setSpeed(0.001);
      setObstacleCount(0);
      setPlayerPos(0);
      setScore(0);
    }

    function DetectCollision(xPos:number){
        if(playerPos === xPos)
        {
            Reset();
        }
    }

    function GroundPlane() {
        return (
          <mesh receiveShadow  rotation-x={Math.PI * -0.5} position={[0, -2, 0]}>
            <planeGeometry args={[3, 50]} />
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
        );
      }

      function Obstacles(){
        let obstacles = []
        for(let i = 0; i < obstacleCount; i++)
        {
            obstacles.push(<RunnerShape startOffset={i+1} key={"Obstacle: " + i} yPos={-1.5} speed={speed} endZ={21} endOffset={-10} onReachedCollidePos={setEnemyPos}>
                    <boxGeometry/>
                    <meshStandardMaterial attach="material" color="white" />
                </RunnerShape>    
            );
        }
        return obstacles
      }

      function Player(){
        return (<mesh receiveShadow position={[playerPos, -1.5, 12]} scale={[1,1,1]}>
            <boxGeometry/>
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
        );
      }

  return (
    <div style={{width:"100%", height:"100vh", visibility:props.isHidden?"hidden":"visible", transition:"all 1s"}}>
    <Canvas style={{height:"100vh"}} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45, near: 1, far: 30 }}>
        <color attach="background" args={['#0b0c10']} />
        <hemisphereLight position={[0, 2, 15]} intensity={0.15} groundColor="#0b0c10" />
        <spotLight position={[5, 5, 15]} angle={0.12} penumbra={1} intensity={10} castShadow shadow-mapSize={1024} />
        <rectAreaLight
        width={10}
        height={10}
        color={"white"}
        intensity={2}
        position={[0, 5, 15]}
        castShadow
        />
        <GroundPlane/>
        <Player/>
        {(!props.isHidden)?obstacles:<></>}
    </Canvas>
    <div className={styles.tooltipContainer}>
        <p style={{color:"var(--heading-color)"}}><b>Score:</b> {score}</p>
        <p style={{color:"var(--heading-color)"}}><b>High Score:</b> {highScore}</p>
        <p style={{color:"var(--heading-color)"}}><b>Controls:</b> Left: A, Right: D</p>
        <p style={{color:"var(--heading-color)"}}>Avoid the obstacles</p>
    </div>
    </div>
  )
}

export default InfiniteRunner