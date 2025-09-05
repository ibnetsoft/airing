import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="foot_logo">
              <img src="/assets/img/logo_ll.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center small">
              2025 Copy rights by AIRING. All Rights Reserved.<br />
              Smartcontract : 0xC0d415c55576596437e865533Dd2730293999EDf
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-end">
            <div className="socail-icons">
              <a href="https://x.com/airingpro" target="_blank" rel="noopener noreferrer" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://t.me/+WTKXYPDlbWpmYzY1" target="_blank" rel="noopener noreferrer" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer