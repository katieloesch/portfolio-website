import React from 'react';
import { footerTxt } from '../../../api_data/api_footer';
import './CopyrightFooter.scss';

const CopyrightFooter = () => {
  return (
    <div className='footer-copyright'>
      <p className='footer-copyright__txt'>
        {footerTxt.stack}&nbsp;
        <span>{footerTxt.copyright}</span>&nbsp;{footerTxt.year}&nbsp;
        {footerTxt.author}&nbsp;
        {footerTxt.rights}
      </p>
    </div>
  );
};

export default CopyrightFooter;
