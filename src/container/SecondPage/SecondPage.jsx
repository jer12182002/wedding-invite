import React from 'react';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import diamondRing from '../../vendor/secondPage/icons/diamond-ring.png';
import parking from '../../vendor/secondPage/icons/parking-car.png';
import partyTime from '../../vendor/secondPage/icons/party-time.png';
import eating from '../../vendor/secondPage/icons/eating.png';
import './SecondPage.scss';

const SecondPage = () => {
  return (
    <Container fluid className='secondPage'>
      <Row className='photoArea'>
        <Card photos={<PhotoGallery />}></Card>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Modal
            title='愛的婚約'
            modalHeader={
              <div>
                <img
                  src={diamondRing}
                  style={{ display: 'inline', height: '4rem' }}
                />
                <h1 style={{ display: 'inline' }}>愛的婚約</h1>
                <img src={partyTime} style={{ height: '4rem' }} />
              </div>
            }
            modalContent={
              <div className='vow-container'>
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    `給每一位曾參與我們成長過程的您:
                    跨越了10,000多公里以及13個小時的時差。
                    我們經歷了5年的時光，確認了對方是彼此一生中最重要的人。
                    在這個對我們來說非常重要的日子，
                    我們誠摯地邀請您來我們的喜宴一起分享幸福，
                    讓這個充滿意義的日子更為圓滿！
                  
                    弘哲❤曼綺 敬上
                     `,
                    3000,
                  ]}
                  speed={1}
                  wrapper='p'
                />
              </div>
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <Modal
            title={'婚宴資訊'}
            modalHeader={
              <div>
                <img src={parking} style={{ height: '4rem' }} />
                <h1>婚宴資訊</h1>
                <img src={eating} style={{ height: '4rem' }} />
              </div>
            }
            modalContent={
              <div className='wedding-info-container'>
                <p>
                  <span>日期：</span>民國112年2月19日（國曆）禮拜日
                </p>
                <p>
                  <span>喜宴時間：</span>午宴
                </p>
                <p>
                  <span>入席時間：</span>中午:11:30
                </p>
                <p>
                  <span>婚宴會館：</span>新天地崇德旗艦店
                </p>
                <p>
                  <span>電話：</span>
                  <a href='tel:+0422438222'>(04)2243-8222</a>
                </p>
                <p>
                  <span>地點：</span>台中市北屯區崇德五路345號
                </p>
                <p>
                  <span>停車資訊：</span>松竹停車場,三小時免費停車
                </p>
                <p>
                  <span>地圖(點擊可放大)：</span>
                </p>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.79468577194!2d120.68213691543659!3d24.17893227818628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917c15c7763e9%3A0xa1cc7f52b77c3f88!2z5paw5aSp5Zyw5bSH5b635peX6Imm5bqX!5e0!3m2!1sen!2sca!4v1673807868822!5m2!1sen!2sca'
                  width='100%'
                  height='100%'
                  style={{ border: '2px solid black' }}
                  allowfullscreen={true}
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'></iframe>
              </div>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondPage;
