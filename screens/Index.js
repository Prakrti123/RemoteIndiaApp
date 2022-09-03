import OnBoard from "./OnBoard/OnBoarding"
import SplashScreen from "./SplashScreen/SplashScreen"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import Verification from "./SignUp/Verification"
import GoogleSignIn from "./SignIn/GoogleSignIn"
import ForgotPassword from "./SignIn/ForgotPassword"
import OtpPassword from "./SignIn/OtpPassword"
import CreateNewPass from "./SignIn/CreateNewPass"
import AccSetUp from "./AccountSetUp/AccSetUp"

// booking details
import BookingDetail from "./BookingDetails/BookingDetail";
import AddPromo from "./BookingDetails/AddPromo";
import Location from "./BookingDetails/Location";
import PaymentMethod from "./BookingDetails/PaymentMethod";
import ReviewScreen from "./BookingDetails/Review/ReviewScreen";
import PinScreen from "./BookingDetails/Authentication/PinScreen";
import EReceiptStyle from "./BookingDetails/E_Receipt/E_ReceiptStyle";
import MsgWorker from "./BookingDetails/MsgWorker/MsgWorker";

// Home Stack
import HomePage from "./Home/HomePage"
import OfferPage from "./Home/OfferBannerSection/OfferPage"
import AllService from "./Home/ServiceSection/AllService"
import PopService from "./Home/PopularSection/PopService"
import Notification from "./Home/Notification/Notification"
import Bookmark from "./Home/Bookmark/Bookmark"
import Search from "./Home/search/Search"

// service pages
import Cleaning from "./Home/ServicePages/CleaningService/Cleaning"
import Repairing from "./Home/ServicePages/RepairingService]/Repairing"
import Painting from "./Home/ServicePages/PaintingService/Painting"
import Laundry from "./Home/ServicePages/LaundryService/Laundry"
import Appliance from "./Home/ServicePages/ApplianceService/Appliance"
import Plumbing from "./Home/ServicePages/PlumbingService/Plumbing"
import Shifting from "./Home/ServicePages/ShiftingService/Shifting"

// Booking Stack
import BookingPage from "./Booking/BookingPage";

// Profile Stack
import ProfilePage from "./Profile/ProfilePage";
import Edit from "./Profile/EditProfile/EditProfile";
import NotiScreen from "./Profile/Notification/Notification";
import Payment from "./Profile/Payment/Payment";
import Wallet from "./Profile/Wallet/Wallet";
import { AddCard } from "../components/Index";
import Security from "./Profile/Security/Security";
import Language from "./Profile/Language/Language";
import Privacy from "./Profile/Privacy/Privacy";
import InviteFriend from "./Profile/InviteFriend/InviteFriend";
import Help from "./Profile/HelpCenter/Help";

// Service Details
import ServiceDetails from "./Home/ServiceDetails/ServiceDetails";

// Service Booking
import BookCleaning from "./Home/Booking/BookCleaning";

// Inbox
import Inbox from "./Inbox/Inbox";
import ChatScreen from "./Inbox/ChatScreen/ChatScreen";

// Calender
import Calendar from "./Calendar/Calendar";


export {
    SplashScreen, OnBoard,
    SignIn, SignUp,
    Verification, GoogleSignIn,
    ForgotPassword, OtpPassword,
    CreateNewPass, AccSetUp,

    // Booking detail
    BookingDetail, AddPromo, 
    Location, PaymentMethod,
    ReviewScreen, PinScreen,
    EReceiptStyle, MsgWorker,

    // Home Page
    HomePage, OfferPage,
    AllService, PopService,
    Notification, Bookmark,
    Search,

    // service pages
    Cleaning, Repairing,
    Painting, Laundry,
    Appliance, Plumbing,
    Shifting,

    // Booking
    BookingPage,

    // profile
    ProfilePage, Edit, Payment, Wallet,
    AddCard, Security, Language, 
    Privacy, InviteFriend, Help,

    // Service Details
    ServiceDetails,

    // service booking
    BookCleaning,

    // Inbox
    Inbox, ChatScreen, NotiScreen,
    
    // calender
    Calendar,
}
