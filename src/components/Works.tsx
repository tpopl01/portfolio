import Collapsable from "./Collapsable"
import ImageLeft from "./ImageLeft"
import ImageRight from "./ImageRight"
import HalfWidthSplit from "./Layouts/HalfWidthSplit"
import HalfWidthSplitReversed from "./Layouts/HalfWidthSplitReversed"
import ParagraphNote from "./ParagraphNote"
import Tag from "./Tag"
import TagContainer from "./TagContainer"


const Works = () => {
  return (
    <>
    <br/>
    <h2 style={{marginTop:"50px"}}>Professional Work</h2>
    <Collapsable title="Virtual Arts" isCollapsed={false}>
     <div style={{width:"100%"}}>
          <HalfWidthSplit 
              left={
                <div>
                    <h2>Render Farm</h2>
                    <ParagraphNote title="Problem:" description="Rendering is slow on one machine"/>
                    <ParagraphNote title="Solution:" description="Automatically break the task into several parts and split between multiple machines. Then combine the rendered outputs into one video."/>
                      <TagContainer>
                          <Tag tagName="Python"/>
                      </TagContainer>
                </div>
              }
              right={
                <ImageRight imageSource="./rendering.jpg"/>
              }
          />
          <HalfWidthSplitReversed
              left={
                <div>
                    <h2>CAD to XR</h2>
                    <ParagraphNote title="Problem:" description="No easy way to bring CAD into XR"/>
                    <ParagraphNote title="Solution:" description="Developed a CAD to XR model converter and viewer that works both standalone and integrates as an addon"/>
                      <TagContainer>
                          <Tag tagName="React"/>
                          <Tag tagName="JavaScript"/>
                          <Tag tagName="Electron"/>
                          <Tag tagName="Python"/>
                      </TagContainer>
                </div>
              }
              right={
                <ImageLeft imageSource="./cad.jpg"/>
              }
          />
          <HalfWidthSplit 
              left={
                  <div>
                      <h2>Video Editing</h2>
                      <ParagraphNote title="Problem:" description="Many common video editing tasks can be repetitive and slow."/>
                      <ParagraphNote title="Solution:" description="Provided an automated solution to quickly video edit."/>
                        <TagContainer>
                            <Tag tagName="React"/>
                            <Tag tagName="JavaScript"/>
                            <Tag tagName="Tauri"/>
                            <Tag tagName="FFMPEG"/>
                        </TagContainer>
                  </div>
              }
              right={
                <ImageRight imageSource="./editor.jpg"/>
              }
          />
          <HalfWidthSplitReversed 
              left={
                <div>
                    <h2>Automation</h2>
                    <ParagraphNote title="Problem:" description="Ineffective communication with clients via emails."/>
                    <ParagraphNote title="Solution:" description="Jira style software to improve efficiency and ensure correct data is communicated."/>
                    <TagContainer>
                        <Tag tagName="React"/>
                        <Tag tagName="JavaScript"/>
                        <Tag tagName="Tauri"/>
                        <Tag tagName="MongoDB"/>
                    </TagContainer>
                </div>
              }
              right={
                <ImageLeft imageSource="./increase_graph.png"/>
              }
          />
          <HalfWidthSplit 
              left={
                  <div>
                      <h2>Virtual Marketing and Training</h2>
                      <ParagraphNote title="Problem:" description="Training can be expensive and difficult. Marketing can be difficult during situations like the COVID pandemic."/>
                      <ParagraphNote title="Solution:" description="Industrial training in a VR experience. Marketing in a virtual experience."/>
                        <TagContainer>
                            <Tag tagName="React"/>
                            <Tag tagName="JavaScript"/>
                            <Tag tagName="Tauri"/>
                            <Tag tagName="FFMPEG"/>
                        </TagContainer>
                  </div>
              }
              right={
                <ImageRight imageSource="./unity.jpg"/>
              }
          />
      </div>
      </Collapsable>
    <Collapsable title="Salway Preschool" isCollapsed={false}>
    <div style={{width:"100%"}}>
        <HalfWidthSplitReversed 
            left={
              <div>
                  <h2>Website</h2>
                  <ParagraphNote title="Problem:" description="Outdated site. Non-developers cannot update it."/>
                  <ParagraphNote title="Solution:" description="Updated the site and provided tools and documentation on maintaining and expanding."/>
                  <TagContainer>
                    <Tag tagName="PHP"/>
                    <Tag tagName="JavaScript"/>
                    <Tag tagName="HTML & CSS"/>
                  </TagContainer>
              </div>
            }
            right={
              <ImageLeft imageSource="./work1.jpg"/>
            }
        />
    </div>
    </Collapsable>
  </>
  )
}

export default Works