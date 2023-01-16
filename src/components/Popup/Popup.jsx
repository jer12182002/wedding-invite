import React from 'react';
import './Popup.scss';
const Popup = () => {
  return (
    <div className='popup animate delay-1'>
      <div className='popup-round-second'>
        <div className='header-text animate delay-2'>You're invited</div>
        <div className='popup-square'>
          <div className='popup-square-second'>敬邀參加</div>
        </div>
      </div>
      <div className='text-wrapper'>
        <pre>陳弘哲 ＆ 何曼綺的婚禮</pre>
        <div className='divider'>❤❤❤</div>
        <pre>民國112年2月19號</pre>
        <pre>入席時間：中午11:30</pre>
      </div>
    </div>
  );
};

export default Popup;
