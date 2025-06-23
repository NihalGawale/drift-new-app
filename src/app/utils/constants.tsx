import { EmailIcon, LocationIcon, PhoneIcon } from "../components/icons";

export const navBarItems = [
  { id: "products", value: "Products", isClicked: false },
  { id: "about-us", value: "About Us", isClicked: false, offset: -100 },
  { id: "contact-us", value: "Contact Us", isClicked: false, offset: -100 },
  { id: "faq", value: "FAQ's", isClicked: false, offset: -100 },
];

export const contactLeftConstants = [
  {
    key: "location",
    icon: <LocationIcon />,
    title: "Office",
    description: "Visit us at our headquarters for personalized service.",
    contact: "Qtr no.28 Behind S B City College, Somwaripeth, Nagpur - 440024, Maharashta, India",
  },
  {
    key: "email",
    icon: <EmailIcon />,
    title: "Email",
    description: "Reach us anytime for inquiries or support.",
    contact: "teamdriftwear@gmail.com",
  },
  {
    key: "phone",
    icon: <PhoneIcon />,
    title: "Phone",
    description: "Call us for immediate assistance or questions.",
    contact: "+91 7219591231",
  },
];
