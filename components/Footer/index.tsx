// Images and Icons
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import mail from '../../images/mail.svg';
// Next
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className='justify-center px-10 py-10 text-sm text-white footer bg-blackLighter xl:px-40'>
      <div className='flex items-center justify-center mb-5 links sm:mb-0'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/jleomorris'
        >
          <div className='relative w-8 h-8 mr-3'>
            <Image
              src={github}
              alt='github'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/james-morris-62a66b166/'
        >
          <div className='relative w-8 h-8'>
            <Image
              src={linkedin}
              alt='github'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </a>
      </div>
      <div className='space-y-3 copyright-contact'>
        <p className='m-0'>© James Morris {new Date().getFullYear()}</p>
        <a href='mailTo:james-morris2010@hotmail.co.uk' className='block'>
          <div className='flex'>
            <div className='relative w-12 h-6 -ml-3'>
              <Image src={mail} alt='mail' layout='fill' />
            </div>
            <p
              className='m-0'
              style={{ display: 'inline-block', wordBreak: 'break-all' }}
            >
              jamesleomorris@gmail.com
            </p>
          </div>
        </a>
        <p className='m-0'>
          All product names, logos, and brands are property of their respective
          owners. All company, product and service names used in this website
          are for identification purposes only. Use of these names, logos, and
          brands does not imply endorsement
        </p>
      </div>
    </div>
  );
};

export default Footer;
