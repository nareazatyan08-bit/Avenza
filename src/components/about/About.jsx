import Avenza from "/images/Avenza.png";

function About() {

  return (
  <div id="about" className=" scroll-mt-24 bg-[#F5EFE6] w-full h-120 mt-20">

  <div className="flex items-center h-full">
    <img
      src={Avenza}
      className="w-[40%] h-[480px] ml-10 object-cover object-top ml-10"
    />

    <div className="ml-auto mr-16 w-[50%]">

      <h1 className="text-4xl font-bakbak text-[#4B3025] mb-6">
        About Avenza
      </h1>
      <p className="text-xl leading-8 text-[#705548] font-baloo2">
        Avenza is more than just a coffee shop — it's a little
        escape from the ordinary. A place where every cup is
        made with love, every detail tells a story, and every
        moment feels special. Inspired by warmth, comfort,
        and the beauty of little things, Avenza is here to make
        your everyday moments a little more magical.
      </p>
      <p className="text-xl leading-8 text-[#705548] font-baloo2 mt-5">
        Since opening our doors, we’ve been bringing people
         together through the love of coffee. What started as 
         a simple passion has grown into a place where every 
         visit becomes a little moment to remember. And this is 
         only the beginning of our story.
      </p>
    </div>
  </div>
</div>
      
  );
}

export default About