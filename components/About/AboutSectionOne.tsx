import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 p-16">


    <div className="text-primary text-center text-4xl">
    Eric Alexander
    </div>

    <br></br>

    <div>
    Education:
    I refined my skills at Johnson and Wales University, where I immersed myself in the art and science of gastronomy. The renowned chefs there nurtured my talent and ignited my love for creating culinary masterpieces.
    </div>

    <br></br>
    
    <div>
    Work History:
    My culinary journey started in Newport, Rhode Island, a town brimming with coastal charm and a vibrant food scene. I embraced the local ingredients and crafted dishes that delighted patrons and garnered recognition within the culinary community.
    </div>

    <br></br>
    
    <div>
    Driven by a thirst for exploration, I returned to my hometown of Boston, leaving my mark on the city's gastronomic landscape. At Catalyst, I had the pleasure of working with a team dedicated to culinary excellence. The emphasis on seasonal flavors and high-quality ingredients allowed me to showcase my skills and create memorable dining experiences.
    </div>

    <br></br>

    <div>
    At Branch Line, I discovered an appreciation for the incredible quality of food. The focus on rotisserie cooking and farm-to-table practices inspired me to elevate my craft even further. The experience of crafting delicious meals using the freshest, locally sourced ingredients was truly invigorating.
    </div>

    <br></br>
    
    <div>
    Notably, I had the privilege of working at Walt Disney World, where I mastered large-scale culinary operations while maintaining an unwavering commitment to quality. Serving guests from around the world was a truly magical experience.
    </div>
    <br></br>

    <div>
    Personal Chef:
    Today, I bring my extensive culinary background and artistic flair directly to your table as a personal chef. I specialize in creating customized menus that cater to your unique preferences and dietary requirements. Whether it's an intimate gathering or a grand celebration, I'm dedicated to crafting a dining experience that leaves a lasting impression.
    </div>
    
    </section>
  );
};

export default AboutSectionOne;
