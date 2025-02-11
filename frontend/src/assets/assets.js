import saab_340_air from './saab_340_air.jpg'
import saab_340_interior from './saab_340_interior.jpg'

import logo from './logo.png'
import hero_img from './hero_img.jpg'
import bin_icon from './bin_icon.png'
import cart_icon from './cart_icon.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import menu_icon from './menu_icon.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import support_img from './support_img.png'
import star_icon from './star_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.png'

export const assets = {

    saab_340_air,
    saab_340_interior,

    logo,
    hero_img,
    bin_icon,
    cart_icon,
    cross_icon,
    dropdown_icon,
    exchange_icon,
    menu_icon,
    search_icon,
    profile_icon,
    quality_icon,
    support_img,
    star_icon,
    stripe_logo,
    razorpay_logo,
    about_img,
    contact_img,

    // Add more assets here...
 
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "Test description",
        price: 100,
        image: [],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "SAAB 340",
        description: "SAAB",
        price: 1999995,
        image: [saab_340_air, saab_340_interior],
        category: "Don't know",
        subCategory: "See more info",
        sizes: ["A","B"],
        date: 1716634345448,
        bestseller: true
    },
]