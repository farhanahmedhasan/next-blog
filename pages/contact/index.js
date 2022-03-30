import Head from "next/head";

import ContactForm from "../../components/contactPage/ContactForm";

const ContanctPage = () => {
  return (
    <>
      <Head>
        <title>Contact </title>
        <meta name="description" content="If you have any queries feel free to send message" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContanctPage;
