import { Icon } from "../Misc/Icon.component";
import {
  AiOutlineGithub, MdEmail
} from "../Misc/Icons.collection";


const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="flex flex-row justify-center my-8 gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/ajhenry" />

       
        <Icon icon={<MdEmail />} url="mailto:andrew@ajhenry.dev" />
      </div>
    </div>
  );
};

export default Contact;
