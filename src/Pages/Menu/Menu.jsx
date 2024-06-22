import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import backgroundImage from '../../assets/menu/banner3.jpg'
import useFoodMenu from "../../hooks/useFoodMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

import dessertImage from '../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';




const Menu = () => {
    const [menu] = useFoodMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu </title>
            </Helmet>
            {/** main cover **/}
            <Cover backgroundImage={backgroundImage} title={'Our Menu'}></Cover>
            <SectionTitle heading={'Dont Miss'} subHeading={'Todays offer'}></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            {/** Dessert */}
            <MenuCategory items={dessert}  backgroundImage={dessertImage} title={'dessert'}></MenuCategory>

            {/** pizza */}
            <MenuCategory items={pizza}  backgroundImage={pizzaImage} title={'pizza'}></MenuCategory>

            {/** salad */}
            <MenuCategory items={salad}  backgroundImage={saladImage} title={'salad'}></MenuCategory>
            {/** pizza */}
            <MenuCategory items={soup}  backgroundImage={soupImage} title={'soup'}></MenuCategory>


        </div>
    );
};

export default Menu;