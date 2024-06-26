import React from 'react'
import { CContainer, CRow } from '@coreui/react'
import Welcome from '../../../../assets/images/Welcome.png'
const About = () => {
  return (
    <div id="about" className="section">
      <CContainer data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <CRow>
          <div className="col-xs-12 col-md-6">
            {' '}
            <img src={Welcome} className="img-fluid" alt="" />{' '}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                &emsp;&emsp;
                試著回想18歲的自己，未來的人脈往往成為促使我們選擇台大電機的原因，然而曾經我們引以為傲的人脈資產，現在卻如此凋零。
                一瞥世界上知名大學，他們都擁有一個共通點：<b>人脈網絡</b>。
                <br />
                &emsp;&emsp;
                哈佛大學的老爺爺願意為了甫錄取的學弟妹提點長談，史丹佛大學的前輩也不遺餘力提拔後進。相比之下，我們認為系上一直缺乏專屬平台
                <b>供系友建立緊密的網路</b>
                ，遂使人脈日益薄弱。
                <br />
                &emsp;&emsp;
                我們希望這個聯絡網能成為一個整合式的社群網路，讓NTUEErs聚在一起；秉持著恢復人脈網的精神，讓NTUEE能在世界上有更大的影響力；建立一個連結電機系的共同回憶，讓系友們有專屬的家！
              </p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : 'loading'}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                      : 'loading'}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </CRow>
      </CContainer>
    </div>
  )
}

export default About
