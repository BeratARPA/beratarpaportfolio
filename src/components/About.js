import React from "react";
import profile from '../images/BeratARPA.jpg'

const About = () => {
  return (
    <section className="py-8">
      <div className="about flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-5 text-center">Hakkımda</h1>
        <img
          className="rounded-full w-64 h-64 m-10 flex justify-center"
          src={profile}
          alt="Berat ARPA"
        />
        <p className="text-lg text-center">
          Merhaba, ben Ben Berat ARPA. Backend geliştirme konusunda deneyimliyim
          ve çeşitli projelerde yer aldım. Sizlere kendi geliştirdiğim projeleri
          tanıtmaktan mutluluk duyarım.
        </p>
      </div>
    </section>
  );
};

export default About;
