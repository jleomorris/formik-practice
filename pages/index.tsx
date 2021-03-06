// Next
import Head from 'next/head';
import Image from 'next/image';
// Styling
import homeStyles from '../styles/Home.module.css';
// Animation
import AnimationParent, {
  Variant,
} from '../components/FramerMotion/AnimationParent';
// Components
import PageContainer from '../components/PageContainer';
import AnimationChild from '../components/FramerMotion/AnimationChild';
import SignupForm from '../components/SignUpForm';

export default function Home() {
  return (
    <PageContainer bgColor='bg-gray-100'>
      <Head>
        <title>Formik Practice</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AnimationParent variant={Variant.PAGE}>
        <SignupForm />
      </AnimationParent>
    </PageContainer>
  );
}
