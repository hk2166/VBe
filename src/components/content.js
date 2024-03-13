import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./conten.css";
import correct from "../assests/correct.png";
import image01 from "../assests/image01.png";
import image13 from "../assests/image13.png";
import image16 from "../assests/image16.png";
import image17 from "../assests/image17.png";
import image18 from "../assests/image18.png";
import image19 from "../assests/image19.png";
import image20 from "../assests/image20.png";
import image25 from "../assests/image25.jpg";
import image26 from "../assests/image26.jpeg";
import image27 from "../assests/image26.jpg";
import image28 from "../assests/image28.jpg";
import image29 from "../assests/image29.jpg";
import image30 from "../assests/image30.jpg";
import image32 from "../assests/image32.jpg";
import image33 from "../assests/image33.png";
import image34 from "../assests/image34.jpg";
import image35 from "../assests/image35.jpg";
import image36 from "../assests/image36.jpg";
import image37 from "../assests/image37.jpg";
import image38 from "../assests/image38.jpeg";
function TabsExample() {
  const dataMappings = {
    button1: {
      name: "Bird Spikes",
      heading1:
        "Bird spike nets deter perching birds, offering human, low-maintenance protection.",
      img: image01,
      p1: "Bird spike nets, often referred to as bird spike strips or bird deterrent spikes, are ingenious bird control systems designed to discourage birds from perching, roosting, or nesting on various surfaces and structures. These bird control devices consist of rows of thin, pointed spikes made from materials like stainless steel or plastic. The sharp spikes make it uncomfortable and practically impossible for birds to land without causing them harm.",
      p2: "Bird spike nets are widely used in urban areas, on buildings, ledges, rooftops, signs, and other architectural features vulnerable to bird infestations. They serve as a humane and effective solution to prevent damage caused by birds, such as building corrosion from bird droppings and the spread of diseases. Unlike harmful pesticides or traps, bird spike nets offer a non-lethal method of bird control while ensuring the safety and cleanliness of the surrounding environment.",
      p3: "These versatile bird deterrent systems are easy to install, durable, and require minimal maintenance. They are a cost-effective, long-term solution for maintaining the aesthetic appeal and structural integrity of buildings, while also mitigating the potential health risks associated with bird infestations. In summary, bird spike nets are an invaluable tool in bird control, providing a humane, efficient, and environmentally friendly way to keep birds at bay in urban and industrial settings.",
      col1: "Effective Deterrent: Bird spikes provide an effective deterrent to birds, preventing them from perching or nesting in unwanted areas. ",
      col2: "Low Maintenance: Once installed, bird spikes require minimal maintenance, providing a long-term solution to bird-related issues. ",
      col3: "Versatility: They are suitable for various surfaces, including ledges, rooftops, and signage, making them a versatile solution for different settings. ",
      col4: "Humane: Bird spikes are a humane way to address bird-related problems without causing harm to the birds.",
    },
    button2: {
      name: "Pegion Safety Nets",
      heading1:
        "Durable pigeon safety nets deter bird infestations, protect property, and ensure hygiene with proper maintenance.",
      img: image18,
      p1: " Pigeon safety nets are essential protective measures designed to ensure the safety and well-being of individuals and properties from the potential hazards posed by pigeons. These nets are crafted from durable and strong materials, strategically installed to create a barrier that prevents pigeons from roosting or nesting in unwanted areas. The nets act as a humane deterrent, deterring pigeons without causing them harm. ",
      p2: "They are particularly useful in urban settings where pigeon infestations can lead to health and hygiene issues, as pigeon droppings can spread diseases and damage buildings. The installation of pigeon safety nets helps maintain a clean and hygienic environment, preventing the accumulation of pigeon droppings and feathers. ",
      p3: " Additionally, these nets contribute to preserving the aesthetic appeal of buildings and public spaces by keeping them free from unsightly pigeon roosting. The nets are a cost-effective and eco-friendly solution, providing a long-lasting remedy to the challenges posed by pigeon populations. Overall, pigeon safety nets play a crucial role in ensuring a safe, clean, and visually pleasing environment for residents and visitors alike",
      col1: "Prevent Nesting: Pigeon safety nets create a barrier that prevents pigeons from nesting in balconies, windows, and other open spaces.",
      col2: "Aesthetic Appeal: These nets are designed to be discreet and do not compromise the aesthetic appeal of the building or structure.",
      col3: "Durability: High-quality materials ensure the durability of the safety nets, providing long-lasting protection.",
      col4: "Customizable: Tailored solutions to fit the specific needs and dimensions of different spaces",
    },
    button3: {
      name: "Children Safety Nets",
      heading1:
        "A children's safety net offers holistic support, including education, healthcare, and legal protection, ensuring children's well-being and development.",
      img: image17,
      p1: "A children's safety net is a vital and multifaceted system designed to safeguard the well-being, development, and overall safety of children. It encompasses a comprehensive range of services and initiatives aimed at nurturing and protecting our youngest members of society. ",
      p2: "At its core, a children's safety net includes child welfare services that address issues such as child abuse, neglect, and foster care, ensuring that children are shielded from harm and provided with stable, loving homes when necessary. Additionally, it encompasses educational systems that offer quality schooling and educational resources, aiming to equip children with the knowledge and skills they need to thrive. Healthcare services are also integral, guaranteeing access to medical care, vaccinations, and regular check-ups to maintain their physical health.Legal protections exist to shield children from exploitation and abuse, enforcing child protection laws, and ensuring their rights are upheld. Equally important is creating a safe and nurturing environment at home, where parents and caregivers play a crucial role in childproofing their homes, providing adequate nutrition, and offering emotional support.",
      p3: "Preventing child abuse and neglect is a significant focus of the safety net, with various programs and campaigns dedicated to raising awareness and providing support to families facing challenges. Child advocacy organizations, nonprofits, and government agencies are actively involved in protecting children's rights and offering resources and assistance to those in need.Youth programs, after-school activities, and sports teams provide structured and safe environments where children can develop skills, build social connections, and channel their energy positively. Mental health services are essential for addressing issues like anxiety, depression, and behavioral disorders, ensuring children's emotional well-being.",
      col1: "Fall Protection: Children's safety nets offer reliable fall protection, especially in high-rise residential buildings or areas with open balconies.",
      col2: "Durable Material: Constructed from durable materials, ensuring longevity and sustained safety.",
      col3: "Visibility: Transparent nets provide safety without obstructing the view, maintaining a sense of openness.",
      col4: "Easy Installation: Quick and straightforward installation minimizes disruption to daily activities.",
    },
    button4: {
      name: "Anti Bird Nets",
      heading1:
        "Anti-bird nets deter birds from roosting, protecting crops, preventing damage, and maintaining cleanliness, offering a humane and eco-friendly solution.",
      img: image19,
      p1: "Anti-bird nets, also known as bird exclusion nets, are essential tools in mitigating the problems caused by bird infestations. These nets are crafted from durable materials like nylon or polyethylene and are designed to create a physical barrier that effectively deters birds from roosting, nesting, or entering specific areas. They find extensive use in various sectors, including agriculture, where they protect crops from avian pests, thus reducing yield losses and the need for harmful pesticides.",
      p2: "In industrial settings, anti-bird nets prevent birds from causing damage to machinery, equipment, and structures. Moreover, these nets help maintain hygiene and safety by keeping bird droppings away from work areas, as bird droppings can pose health risks. In urban environments, they are often employed to preserve the cleanliness and aesthetics of buildings and public spaces by preventing pigeons and other birds from roosting on ledges, roofs, and balconies.",
      p3: "Anti-bird nets are an eco-friendly and humane solution to bird-related issues, as they do not harm the birds but simply create a barrier that redirects their flight path. These nets are known for their durability, offering long-lasting protection against avian intrusions. Overall, anti-bird nets play a crucial role in safeguarding property, crops, and public spaces while promoting a harmonious coexistence with our feathered friends.",
      col1: "Crop Protection: Essential for agricultural settings, anti-bird nets protect crops from bird damage, ensuring higher yields.",
      col2: "Environmentally Friendly:A non-lethal and environmentally friendly solution to bird-related issues",
      col3: "Custom Sizing: Available in various sizes to suit different areas, from small gardens to large agricultural fields.",
      col4: "Cost-Effective:Helps prevent crop losses and reduces the need for costly repairs or replacements.",
    },
    button5: {
      name: "Duct Area Safety Nets",
      heading1:
        "Duct area safety nets are vital for worker safety in confined or elevated spaces, acting as a protective barrier against falls and hazards.",
      img: image38,
      p1: "Duct area safety nets are essential protective measures employed in construction and industrial settings to ensure the safety of workers and prevent accidents. These nets are specifically designed to enclose open ducts, chutes, or shafts, creating a barrier that prevents objects, tools, or debris from falling down these openings, which could potentially harm workers below.",
      p2: "These safety nets are typically made from strong, durable materials like nylon or polypropylene and are installed at various heights within the duct area. They serve as a critical safeguard against falling objects and help maintain a secure work environment. Duct area safety nets are a key component of workplace safety protocols and are essential for compliance with safety regulations.",
      p3: "Regular inspection and maintenance of these nets are crucial to ensure their effectiveness, as they are designed to withstand substantial loads and provide a reliable layer of protection. In summary, duct area safety nets are a vital safety feature in construction and industrial sites, significantly reducing the risk of accidents and injuries caused by falling objects.",
      col1: "Prevent Debris Accumulation: Duct area safety nets prevent debris and foreign objects from accumulating in ducts, ensuring proper ventilation and functioning.",
      col2: "Easy Inspection: Transparent nets facilitate easy inspection and maintenance of duct systems.",
      col3: "Worker Safety: Enhances worker safety by reducing the risk of accidental falls into ducts during maintenance or repair activities.",
      col4: "Custom Fit: Tailored to fit the specific dimensions of duct areas, ensuring comprehensive coverage.",
    },
    button6: {
      name: "Construction Safety Nets",
      heading1:
        "Construction safety nets prevent accidents, protect workers, and reduce injuries by catching falling objects or individuals on construction sites.",
      img: image25,
      p1: "Construction safety nets are crucial components in ensuring the well-being of workers on construction sites. These nets, typically made from durable materials such as nylon or polypropylene, are strategically placed at various heights to catch falling objects, debris, or even workers in case of accidents.",
      p2: "Their primary purpose is to prevent injuries and fatalities by providing a reliable safety barrier. Construction safety nets are designed to withstand significant impact forces and are a fundamental part of workplace safety protocols.These nets not only protect workers but also serve to safeguard pedestrians and property around construction sites. Regular inspection and maintenance are essential to ensure their integrity and effectiveness. ",
      p3: "Construction safety nets are a vital investment for construction companies, contributing to improved workplace safety, reduced accidents, and compliance with safety regulations. They play a critical role in creating a secure environment where workers can perform their tasks with confidence, minimizing risks and promoting a safer construction industry.",
      col1: "Fall Protection: Construction safety nets act as a crucial safety measure, preventing serious injuries or fatalities by cushioning falls from heights during construction activities.",
      col2: "Compliance: compliance with safety regulations and standards, demonstrating a commitment to the well-being of workers on construction sites.",
      col3: "Versatility: Suitable for various construction applications, including scaffolding, open edges, and high-rise buildings.",
      col4: "Durable Construction: Made from durable materials, these nets withstand harsh weather conditions and provide long-lasting protection.",
    },
    button7: {
      name: "Industrial Safety Nets",
      heading1:
        "Industrial safety nets safeguard employees and equipment by catching falling objects, crucial for safer workplaces.",
      img: image26,
      p1: "Industrial safety nets are critical components of workplace safety measures in various industries. These nets are designed to prevent accidents, protect workers, and maintain a secure work environment. They are typically made from high-strength materials like nylon or polypropylene and are strategically placed to catch falling objects or provide fall protection for workers at elevated heights.",
      p2: "Industrial safety nets are used in construction sites, warehouses, manufacturing facilities, and other workplaces where the risk of falling objects or personnel is present. They play a pivotal role in reducing the potential for injuries and fatalities by acting as a barrier against falling debris or providing a safety net in case of accidental falls.",
      p3: "Regular inspection, maintenance, and compliance with safety regulations are essential to ensure the effectiveness of industrial safety nets. These nets are a crucial part of workplace safety protocols and contribute significantly to accident prevention, making them a fundamental investment in employee well-being and overall workplace safety.",
      col1: "Personnel Safety: Industrial safety nets protect personnel working at elevated heights, reducing the risk of injuries due to falls.",
      col2: "protection. Nets can also prevent tools and equipment from falling, minimizing the potential damage and hazards to those below.",
      col3: "Custom Solutions: Tailored to specific industrial needs, we ensure that safety nets are designed and installed to address unique challenges and requirements.",
      col4: "Enhanced Productivity: By providing a secure working environment, industrial safety nets contribute to increased productivity and worker confidence.",
    },
    button8: {
      name: "Coconut Safety Nets",
      heading1:
        "Coconut safety nets provide essential protection from falling coconuts, ensuring safety in coconut tree-rich areas.",
      img: image13,
      p1: "Coconut safety nets are essential protective measures designed to safeguard individuals and property in areas where coconut trees are prevalent. These specialized nets are strategically installed beneath coconut trees to mitigate the potential risks associated with falling coconuts. Coconuts can be heavy and pose a significant threat, capable of causing severe injuries or property damage when they plummet from heights.",
      p2: "These safety nets are typically crafted from durable materials such as nylon or polypropylene, ensuring their ability to withstand the impact of falling coconuts. They are engineered to create a secure barrier that catches and holds the coconuts, preventing them from reaching the ground. This not only protects pedestrians and passersby from harm but also safeguards vehicles, buildings, and valuable assets beneath coconut trees.",
      p3: "Coconut safety nets are particularly prevalent in tropical regions where coconut cultivation is widespread. They are a proactive safety measure that significantly reduces the risk of accidents and potential liabilities associated with falling coconuts. These nets offer peace of mind to property owners, local authorities, and the general public by ensuring a safer environment in coconut-rich areas. Overall, coconut safety nets are a crucial element in promoting safety and preventing accidents in regions where coconut trees are a common sight.",
      col1: "Crop Protection: Coconut safety nets shield coconut trees and crops from birds, reducing the damage caused by pecking and feeding.",
      col2: "Harvest Safety: During coconut harvesting, these nets provide a safety net, preventing coconuts from falling and causing harm to people or property below.",
      col3: "Aesthetic Preservation: The nets are designed to be discreet, preserving the natural beauty of coconut groves without compromising safety.",
      col4: "Durable Material: High-quality and durable materials ensure that coconut safety nets have a long lifespan, providing ongoing protection.",
    },
    button9: {
      name: "Pets Safety Nets",
      heading1:
        "Pets safety nets protect your furry friends from falling or escaping. It keeps pets safe in all aspects",
      img: image27,
      p1: "Pets safety nets are essential for keeping your pets safe by preventing them from falling from heights, such as balconies or windows. These nets act as a barrier to safeguard your pet from accidents.",
      p2: "These nets are effective in keeping pets from escaping outdoor areas, ensuring that they remain secure within your property. This is especially crucial for cats and small dogs.",
      p3: "Installing safety nets for your pets provides peace of mind, allowing your animals to enjoy fresh air and outdoor spaces without the risk of injury or getting lost. It's a practical and responsible solution for pet owners.",
      col1: "Pet Security:Pets safety nets provide a secure environment by preventing pets from accidentally falling from balconies or windows.",
      col2: "Unobstructed Views: Transparent nets maintain the visual appeal of the space while ensuring the safety of pets.",
      col3: "Easy Installation:Quick and easy installation without causing damage to existing structures or requiring extensive modifications.",
      col4: "Versatility: Suitable for various spaces, including balconies, windows, and terraces, to create pet-friendly zones.",
    },
    button10: {
      name: "Balcony Safety Nets",
      heading1:
        "Balcony safety nets are vital for preventing accidents and ensuring safety, especially for children and pets, in high-rise buildings.",
      img: image20,
      p1: "Balcony safety nets are crucial installations designed to prevent accidents and enhance safety in residential and commercial buildings with elevated balconies or open spaces. These nets are typically made from durable materials such as nylon or polypropylene and are installed along the edges of balconies.",
      p2: "Their primary purpose is to act as a protective barrier, preventing objects from falling off the balcony and, more importantly, ensuring the safety of residents, particularly children and pets. Balcony safety nets are a cost-effective and aesthetically pleasing solution, as they blend seamlessly with the architecture of the building while providing an extra layer of security.These nets are resistant to weather conditions and UV radiation, ensuring long-lasting performance. Installation is relatively straightforward and minimally invasive, usually involving anchoring the net securely to the balcony structure.",
      p3: "In densely populated urban areas or high-rise buildings, balcony safety nets are essential to prevent accidents, making them a wise investment in overall safety and peace of mind for residents.",
      col1: "Fall Prevention: Balcony safety nets serve as a crucial barrier, preventing accidental falls and providing a safe environment, especially in high-rise buildings.",
      col2: "Child Safety: Ideal for families with children, these nets ensure child safety on balconies and elevated areas.",
      col3: "Aesthetic Appeal: Transparent and discreet, balcony safety nets do not obstruct views or compromise the aesthetic of the building.",
      col4: "Durable Construction: High-quality materials ensure durability and long-lasting protection.",
    },
    button11: {
      name: "Swimming pool Safety Nets",
      heading1:
        "Swimming pool safety nets are crucial for preventing accidental drowning, ensuring the safety of children and pets while maintaining pool access.",
      img: image28,
      p1: "Swimming pool safety nets are essential safety devices designed to prevent accidents and enhance poolside safety. These nets are typically made of durable materials such as nylon or polypropylene and are custom-fitted to cover the surface of the pool.",
      p2: "Their primary purpose is to act as a protective barrier, preventing accidental falls into the pool, particularly for young children and pets. Swimming pool safety nets are a discreet and aesthetically pleasing solution, as they can be easily removed and stored when the pool is in use.",
      p3: "These nets are strong enough to support the weight of a person, ensuring that even if someone accidentally steps onto the net, they won't fall into the water. Installation involves attaching the net securely to anchors around the pool's perimeter.Swimming pool safety nets are a crucial safety feature for residential and commercial pools, providing peace of mind for pool owners and reducing the risk of accidents and drownings. Their durability and convenience make them a practical choice for pool safety.",
      col1: "Child Safety: The primary benefit is preventing accidental drowning, offering a layer of protection for young children and pets.",
      col2: "Debris Control: Safety nets act as a barrier to prevent leaves, debris, and other objects from entering the pool, reducing maintenance efforts.",
      col3: "Quick Installation: Easy and quick to install, providing an immediate safety solution for residential and commercial pools.",
      col4: "Custom Fit: Tailored to fit the specific dimensions and shape of the pool, ensuring comprehensive coverage.",
    },
    button12: {
      name: "Shade Nets",
      heading1:
        "Shade nets offer sun protection for crops and outdoor spaces, promoting healthy growth and comfort in hot weather.",
      img: image29,
      p1: "Shade nets, also known as sunshade nets or shading nets, are versatile and protective coverings made from woven or knitted materials that provide shade and reduce the intensity of sunlight. They are commonly used in various applications, including agriculture, gardening, construction, and recreational areas.",
      p2: "The primary purpose of shade nets is to create a shaded environment that helps regulate temperature and protect against excessive sunlight, reducing heat stress and sunburn. In agriculture, they promote optimal plant growth by controlling light exposure and temperature, making them invaluable for crop cultivation.",
      p3: "Shade nets come in various shading percentages, allowing customization to specific needs. They are highly durable, UV-resistant, and can withstand harsh weather conditions, making them suitable for long-term outdoor use. Installation is typically straightforward, involving attachment to support structures or frames.Whether in gardens, greenhouses, carports, or playgrounds, shade nets offer a cost-effective solution for creating comfortable and protected spaces while reducing the risk of sun-related issues and enhancing overall quality of life.",
      col1: "Sun Protection:Shade nets provide effective protection against harmful UV rays, creating a shaded area for people, plants, or outdoor furniture.",
      col2: "Temperature Control: By reducing direct sunlight, shade nets help control temperatures in outdoor spaces, making them more comfortable.",
      col3: "Crop Protection: In agriculture, shade nets protect crops from excessive sunlight, heat, and dehydration, promoting healthy growth.",
      col4: "Durable Material: Made from durable materials, shade nets withstand various weather conditions and provide long-term shade solutions.",
    },
    button13: {
      name: "All Sports Nets",
      heading1:
        "Sports nets are essential for various sports, ensuring fair play and containment of balls in different materials and sizes.",
      img: image30,
      p1: "Sports nets are integral components of numerous athletic activities, each designed to serve a specific purpose in facilitating gameplay, ensuring safety, and defining the boundaries of competition. These nets come in various materials, sizes, and configurations to meet the unique demands of different sports.",
      p2: "In soccer, goal nets are positioned at each end of the field to capture goals and celebrate scoring moments. Tennis nets, stretched tightly across the court, create a boundary for the game, challenging players with precise shots and serves. Volleyball nets, set at a specified height, divide the court and are essential for rallies, spikes, and blocks in the sport.",
      p3: "Regardless of the sport, sports nets play a pivotal role in enhancing skills, maintaining safety, and ensuring fair play. They are crafted from durable materials, including nylon, polyester, and polyethylene, to withstand the demands of competitive play. From the excitement of scoring goals to the precision of serving an ace, sports nets are crucial in shaping the dynamics and outcomes of athletic competitions, making them a fundamental part of the sports world.",
      col1: "Versatility: All sports nets cater to a wide range of sports, providing a versatile solution for different athletic activities.",
      col2: "Player Safety: These nets act as protective barriers, preventing balls from straying into unwanted areas and enhancing player safety.",
      col3: "Durable Construction: Designed to withstand the impact of sports equipment, ensuring longevity and sustained performance.",
      col4: "Customization: tailored solutions to fit specific sports requirements and dimensions, accommodating various playing environments.",
    },
    button14: {
      name: "Cricket Practice Nets",
      heading1:
        "Cricket practice nets are dedicated enclosures for players to enhance batting, bowling, and fielding skills, essential for training and performance improvement.",
      img: image16,
      p1: "Cricket practice nets are specialized training facilities designed to improve the skills of cricket players, from beginners to professionals. These nets consist of a series of netted lanes or enclosures that provide a controlled environment for batting, bowling, and fielding practice.The primary purpose of cricket practice nets is to enhance a player's technique, precision, and consistency.",
      p2: "Batsmen can practice their shots against various deliveries, while bowlers can work on their accuracy and pace. Fielders can also sharpen their catching and ground fielding skills within these enclosed spaces.Cricket practice nets are typically constructed with durable netting material to withstand the force of cricket balls.",
      p3: "They are often equipped with adjustable height and pitch to accommodate players of different skill levels and training objectives.These nets are essential for team and individual training sessions, helping cricketers fine-tune their abilities and prepare for competitive matches. They provide a safe and controlled environment, preventing stray balls from causing injury or damage, while allowing players to focus on their development and performance.",
      col1: "Focused Practice: Cricket practice nets provide a dedicated space for players to focus on their batting, bowling, or fielding skills without the risk of losing balls.",
      col2: "Safety: Enhances safety by containing cricket balls within the practice area, preventing accidents and damage to surrounding property.",
      col3: "Durability: constructed from high-quality materials, ensuring the nets withstand the force of cricket balls and environmental conditions.",
      col4: "Easy Installation: Quick and straightforward installation creates a practical and effective practice space for cricket enthusiasts.",
    },
    button15: {
      name: "Artificial Grass",
      heading1:
        "Artificial grass, a low-maintenance alternative to real grass, offers a lush, green appearance for residential, sports, and commercial spaces.",
      img: image32,
      p1: "Artificial grass, also referred to as synthetic turf, is a versatile and innovative landscaping solution that replicates the appearance and texture of natural grass. It's crafted from synthetic materials like polyethylene or polypropylene, designed to withstand various weather conditions and heavy use.One of the primary benefits of artificial grass is its low-maintenance nature. Unlike natural grass, it doesn't require regular mowing, watering, or fertilizing, making it an eco-friendly and cost-effective choice for both residential and commercial spaces.",
      p2: ". Its consistent green appearance throughout the year adds to its appeal, providing an evergreen and vibrant landscape.Artificial grass is widely used in residential gardens, sports fields, playgrounds, and even rooftop gardens. It offers durability and longevity, ensuring that it can withstand heavy foot traffic and remain visually appealing for years. Moreover, it promotes water conservation by eliminating the need for irrigation, contributing to sustainable landscaping practices. In sports, artificial grass has revolutionized playing surfaces, providing consistent bounce and reduced risk of injuries. It's commonly seen in soccer, football, golf, and tennis, offering reliable and predictable playing conditions. ",
      p3: "Additionally, its versatility extends to indoor applications, where it can be used for decorative purposes or in areas with limited natural light.In summary, artificial grass has become a popular landscaping solution due to its durability, low maintenance, water conservation benefits, and its ability to provide a lush green environment year-round, making it a practical and aesthetically pleasing choice for various settings.",
      col1: "Focused Practice: Cricket practice nets provide a dedicated space for players to focus on their batting, bowling, or fielding skills without the risk of losing balls.",
      col2: "Safety: Enhances safety by containing cricket balls within the practice area, preventing accidents and damage to surrounding property.",
      col3: "Durability: constructed from high-quality materials, ensuring the nets withstand the force of cricket balls and environmental conditions.",
      col4: "Easy Installation: Quick and straightforward installation creates a practical and effective practice space for cricket enthusiasts.",
    },
    button16: {
      name: "Mosquito Nets",
      heading1:
        "Mosquito nets are vital barriers against disease-carrying insects, especially effective in preventing mosquito-borne illnesses.",
      img: image33,
      p1: "Mosquito nets are essential protective barriers made from fine mesh fabric, designed to prevent mosquitoes and other disease-carrying insects from entering living spaces. They are typically hung over beds, windows, or doors to create a physical barrier that keeps insects at bay while allowing for proper ventilation.The primary purpose of mosquito nets is to reduce the risk of mosquito-borne diseases such as malaria, dengue fever, and Zika virus. ",
      p2: "They provide a simple and effective means of protection, especially in regions where these diseases are prevalent.Mosquito nets come in various forms, including bed nets that envelop sleeping areas and window or door nets that prevent insects from entering homes. Some are treated with insecticide for added effectiveness.",
      p3: "These nets are a cost-effective and environmentally friendly solution for safeguarding individuals, particularly vulnerable populations like children and pregnant women, from the health hazards associated with mosquito bites.The use of mosquito nets has been a significant factor in reducing the transmission of mosquito-borne diseases, contributing to improved public health in many parts of the world.",
      col1: "Disease Prevention: Mosquito nets are a crucial tool in preventing mosquito-borne diseases by creating a physical barrier between people and mosquitoes.",
      col2: "Safe Sleep: Ideal for bedrooms, mosquito nets provide a safe and undisturbed sleep environment, particularly for infants and children.",
      col3: "Easy Installation: Quick and easy to install over beds, cribs, or outdoor sitting areas, providing immediate protection.",
      col4: "Chemical-Free: Mosquito nets offer a chemical-free and environmentally friendly solution to mosquito control, reducing reliance on insecticides.",
    },
    button17: {
      name: "Turf For Cricket Pitch",
      heading1:
        "Cricket pitch turf is meticulously prepared to provide a smooth, consistent bounce for fair and competitive gameplay, with grass type and maintenance tailored to local conditions.",
      img: image34,
      p1: "Turf for a cricket pitch is a specialized playing surface crucial for the game's performance and fairness. It consists of carefully manicured grass that is maintained at a specific height and density to ensure consistent bounce and pace of the cricket ball .The primary purpose of a cricket pitch turf is to provide a level and consistent playing surface for bowlers, batsmen, and fielders.",
      p2: "It plays a pivotal role in determining the outcome of a cricket match, as its condition can greatly influence the movement of the ball and the quality of batting and fielding.Cricket pitch turf is meticulously prepared and maintained to meet international standards. It requires regular mowing, rolling, and aeration to keep it in top condition. Groundsmen play a critical role in ensuring that the pitch offers a fair and challenging playing surface.",
      p3: "The quality and type of turf can vary depending on the level of play and environmental factors. Natural grass turfs are most common, but artificial or hybrid turfs are also used in some cases. A well-prepared and maintained cricket pitch turf is essential for the enjoyment and competitiveness of the game, making it an integral part of any cricket facility, from local grounds to international stadiums.",
      col1: "Consistent Playing Surface: Cricket pitch turf provides a consistent and reliable playing surface, essential for fair and competitive matches.",
      col2: "Durability: High-quality turf materials ensure durability, withstanding the impact of cricket activities and environmental conditions.",
      col3: "Performance Enhancement: Enhances the overall performance of players by offering a surface that supports various playing styles.",
      col4: "Customization: Turf solutions can be tailored to meet specific cricket pitch requirements, including dimensions and soil conditions.",
    },
    button18: {
      name: "Glass Safety Nets",
      heading1:
        "Glass safety nets offer both safety and aesthetics, providing protection in elevated areas while maintaining transparency and design aesthetics.",
      img: image35,
      p1: "Glass safety nets, also known as safety glass panels or balustrades, are innovative and versatile safety measures used in architectural and construction applications to enhance safety while maintaining a modern and transparent aesthetic. Crafted from durable materials like tempered glass or polycarbonate, these nets serve as protective barriers in elevated areas, such as balconies, terraces, and staircases.",
      p2: "One of their primary advantages is their ability to provide unobstructed views, allowing for the enjoyment of scenic surroundings while ensuring safety. The transparency of these nets makes them an ideal choice for both residential and commercial properties, seamlessly blending with various architectural styles.Glass safety nets are engineered to meet stringent safety standards, offering robust protection against falls without compromising on aesthetics.",
      p3: "They are resistant to weathering and corrosion, making them a long-lasting and low-maintenance solution for ensuring safety in elevated spaces.These nets find extensive use in modern architecture, enhancing the overall appearance of buildings, shopping centers, hotels, and public spaces while providing a secure environment for occupants. In summary, glass safety nets are a contemporary and reliable choice for safety-conscious property owners and architects, offering both protection and style in a single, transparent package.",
      col1: "Fall Protection: Glass safety nets act as a protective barrier, preventing glass from shattering and causing injury in the event of breakage.",
      col2: "Security Enhancement: Enhances the overall security of buildings by providing an additional layer of safety for glass surfaces.",
      col3: "Aesthetic Preservation: Transparent nets do not obstruct views, preserving the aesthetic appeal of glass facades and structures.",
      col4: "Versatile Application: Suitable for various glass installations, including windows, balconies, and glass partitions, offering versatile protection.",
    },
    button19: {
      name: "Monkey Saftey Nets",
      heading1:
        "Monkey safety nets are robust barriers preventing monkey intrusions in various settings, ensuring safety and cleanliness.",
      img: image36,
      p1: "Monkey safety nets are crucial protective solutions employed to manage and prevent issues related to monkey intrusions in various environments. Crafted from sturdy materials like nylon or polyethylene, these nets serve as an effective physical barrier against monkeys, deterring them from entering specific areas, such as residential properties, farmlands, and public spaces.In agriculture, monkey safety nets are essential to safeguard crops from monkey foraging and damage, thereby reducing yield losses and the need for harmful pesticides. ",
      p2: "These nets also protect valuable fruit trees and ornamental plants, preserving the investment of property owners and farmers. In residential areas, monkey safety nets maintain safety by preventing monkeys from entering homes, balconies, or outdoor spaces, reducing potential conflicts and health risks associated with monkey intrusions. They offer a humane approach to deterring monkeys without causing harm.",
      p3: "Overall, monkey safety nets play a crucial role in promoting harmony between humans and wildlife while safeguarding property, crops, and public spaces from the challenges posed by monkey populations. They are an eco-friendly and cost-effective solution, ensuring a safer and cleaner environment for both residents and wildlife.",
      col1: "Property Protection: Monkey safety nets act as a barrier, preventing monkeys from entering properties and causing damage.",
      col2: "Garden Preservation: Ideal for protecting gardens and outdoor spaces from monkey intrusion and potential destruction.",
      col3: "Humane Solution: Provides a humane solution to address monkey-related issues without causing harm to the animals.",
      col4: "Custom Installation: Tailored to fit specific areas, ensuring comprehensive coverage and effective protection against monkey activities.",
    },
    button20: {
      name: "Pegion Net for Balcony",
      heading1:
        "Durable pigeon safety nets deter bird infestations, protect property, and ensure hygiene with proper maintenance.",
      img: image37,
      p1: "Monkey safety nets are crucial protective solutions employed to manage and prevent issues related to monkey intrusions in various environments. Crafted from sturdy materials like nylon or polyethylene, these nets serve as an effective physical barrier against monkeys, deterring them from entering specific areas, such as residential properties, farmlands, and public spaces.In agriculture, monkey safety nets are essential to safeguard crops from monkey foraging and damage, thereby reducing yield losses and the need for harmful pesticides. ",
      p2: "These nets also protect valuable fruit trees and ornamental plants, preserving the investment of property owners and farmers. In residential areas, monkey safety nets maintain safety by preventing monkeys from entering homes, balconies, or outdoor spaces, reducing potential conflicts and health risks associated with monkey intrusions. They offer a humane approach to deterring monkeys without causing harm.",
      p3: "Overall, monkey safety nets play a crucial role in promoting harmony between humans and wildlife while safeguarding property, crops, and public spaces from the challenges posed by monkey populations. They are an eco-friendly and cost-effective solution, ensuring a safer and cleaner environment for both residents and wildlife.",
      col1: "Prevent Nesting: Pigeon safety nets create a barrier that prevents pigeons from nesting in balconies, windows, and other open spaces.",
      col2: "Aesthetic Appeal: These nets are designed to be discreet and do not compromise the aesthetic appeal of the building or structure.",
      col3: "Durability: High-quality materials ensure the durability of the safety nets, providing long-lasting protection.",
      col4: "Customizable: Tailored solutions to fit the specific needs and dimensions of different spaces",
    },
  };
  const [jsonData, setJsonData] = useState(dataMappings.button1);
  const [sidebar, setSideBar] = useState(false);

  const updateData = (buttonKey) => {
    const updatedData = dataMappings[buttonKey];
    setJsonData(updatedData);
  };
  const updateData1 = (buttonKey) => {
    const updatedData = dataMappings[buttonKey];
    setJsonData(updatedData);
    setSideBar(!sidebar);
  };
  const toggleList = () => {
    const listGroup = document.getElementById("listGroupDropdowns");
    if (listGroup) {
      listGroup.classList.toggle("show");
    }
  };
  const showSidebar = () => {
    setSideBar(!sidebar);
    console.log(sidebar);
  };

  const { name, heading1, img, p1, p2, p3, col1, col2, col3, col4 } = jsonData;
  return (
    <Container className="cont">
      <Row>
        <Col
          xs={{ span: 12, order: "last" }}
          md={{ span: 12, order: "last" }}
          lg={{ span: 3, order: "first" }}
          sm={{ span: 12, order: "last" }}
        >
          <ListGroup
            as="ul"
            id="listGroupDropdowns"
            className="collapse d-md-block p-4 sidebar"
          >
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button1")}
            >
              Bird Spikes
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button2")}
            >
              Pegion Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button3")}
            >
              Children Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button4")}
            >
              Anti Bird Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button5")}
            >
              Duct Area Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button6")}
            >
              Construction Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button7")}
            >
              Industrial Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button8")}
            >
              Coconut Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button9")}
            >
              Pets Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button10")}
            >
              Balcony Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button11")}
            >
              Swimming pool Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button12")}
            >
              Shade Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button13")}
            >
              All Sports Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button14")}
            >
              {" "}
              Cricket Practice Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button15")}
            >
              Artificial Grass
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button16")}
            >
              Mosquito Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button17")}
            >
              Turf For Cricket Pitch
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button18")}
            >
              Glass Safety Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button19")}
            >
              Monkey Saftey Nets
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="listlink"
              onClick={() => updateData("button20")}
            >
              Pegion Net for Balcony
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          className="  d-block d-lg-none w-75 px-4 flex-column sidebar "
          xs={12}
          md={3}
          lg={{ span: 12, order: "last" }}
          sm={12}
          onClick={() => showSidebar()}
        >
          <div class="para">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </div>
            <div>
              <p class="spacing">Services</p>
            </div>
          </div>
        </ListGroup.Item>
        {sidebar && (
          <div class="sidebar123">
            <Col>
              <ListGroup>
                <ListGroup.Item
                  as="li"
                  style={{ cursor: "pointer" }}
                  //className="listlink"
                  onClick={() => showSidebar()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button1")}
                >
                  Bird Spikes
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button2")}
                >
                  Pegion Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button3")}
                >
                  Children Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button4")}
                >
                  Anti Bird Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button5")}
                >
                  Duct Area Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button6")}
                >
                  Construction Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button7")}
                >
                  Industrial Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button8")}
                >
                  Coconut Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button9")}
                >
                  Pets Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button10")}
                >
                  Balcony Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button11")}
                >
                  Swimming pool Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button12")}
                >
                  Shade Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button13")}
                >
                  All Sports Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button14")}
                >
                  {" "}
                  Cricket Practice Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button15")}
                >
                  Artificial Grass
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button16")}
                >
                  Mosquito Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button17")}
                >
                  Turf For Cricket Pitch
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button18")}
                >
                  Glass Safety Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button19")}
                >
                  Monkey Saftey Nets
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="listlink"
                  onClick={() => updateData1("button20")}
                >
                  Pegion Net for Balcony
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
        )}
        <Col xs={12} md={9} lg={9} sm={12}>
          <h5 className="heading2" style={{ "margin-top": "10px" }}>
            {name}
          </h5>
          <Row>
            <Col lg={12}>
              {" "}
              <h2 className="heading1">{heading1}</h2>
            </Col>
            <Col lg={3}> </Col>
          </Row>
          <Image src={img} alt="image1 of vb" fluid />
          <p className="p1a">{p1}</p>
          <p className="p1a">{p2} </p>
          <p className="p1a">{p3} </p>
          <h6 className="h6a">Benifits</h6>
          <Row className="Rowa">
            <Col xs={1} md={1} lg={1} sm={1} className="col1a">
              {" "}
              <img src={correct} alt="correct-img"></img>
            </Col>
            <Col xs={11} md={11} lg={8} sm={11}>
              {col1}
            </Col>
          </Row>
          <Row className="Rowa">
            <Col xs={1} md={1} lg={1} className="col1a">
              {" "}
              <img src={correct} alt="correct-img"></img>
            </Col>
            <Col xs={11} md={8} lg={8}>
              {col2}{" "}
            </Col>
          </Row>
          <Row className="Rowa">
            <Col xs={1} md={1} lg={1} className="col1a">
              {" "}
              <img src={correct} alt="correct-img"></img>
            </Col>
            <Col xs={11} md={8} lg={8}>
              {col3}{" "}
            </Col>
          </Row>
          <Row className="Rowa">
            <Col xs={1} md={1} lg={1} className="col1a">
              {" "}
              <img src={correct} alt="correct-img"></img>
            </Col>
            <Col xs={11} md={8} lg={8}>
              {col4}
            </Col>
          </Row>

          <div className="heading1">
            {" "}
            <Button
              variant="success"
              href="mailto:vbenterprises42@gmail.com"
              className="but"
            >
              CONTACT
            </Button>{" "}
          </div>
        </Col>{" "}
      </Row>
    </Container>
  );
}
export default TabsExample;
