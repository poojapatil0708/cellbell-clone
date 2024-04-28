import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Heading, Menu, MenuButton, MenuItem, MenuList, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box width="100%">
            <Box display='flex' flexDirection='row' >
                <Heading color="red" p={2} >
                    CELLBELL
                </Heading>
                <Menu isOpen={isOpen}>
                            <MenuButton
                                mx={1}
                                py={[1, 2, 2]}
                                px={4}
                                borderRadius={5}
                                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                onMouseEnter={onOpen}
                                onMouseLeave={onClose}
                            >
                                More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton>
                            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                <MenuItem>Menu Item 1</MenuItem>
                                <MenuItem>Menu Item 2</MenuItem>
                                <MenuItem>Menu Item 3</MenuItem>
                            </MenuList>
                        </Menu>
            </Box>
            <Outlet />
            <Box>
                <div className="row row-cols-sm-4 row-cols-md-12 pb-5" style={{ color: "#666666", backgroundColor: "black" }} >
                    <div className="col p-4" >
                        <Heading color="red" >
                            CELLBELL
                        </Heading>
                        <text style={{ color: "#868080" }} >CELLBELL - India's Trusted Brand for POWERFUL Gaming Chairs.</text>
                    </div>
                    <div className="col p-4">
                        <div className="list-group">
                            <text style={{ color: "#9b9b9b", fontWeight: "bold", paddingBottom: "15px" }} >Support</text>
                            <Link to="/" className="link m-link">Contact Us</Link>
                            <Link to="/" className="link">My Account</Link>
                            <Link to="/" className="link">Support FAQS</Link>
                            <Link to="/" className="link">Warranty Registration</Link>
                            <Link to="/" className="link">Refunds & Cancellations</Link>
                            <Link to="/" className="link">Terms policy</Link>
                            <Link to="/" className="link">Privacy policy</Link>
                        </div>
                    </div>
                    <div className="col p-4">
                        <div className="list-group">
                            <text style={{ color: "#9b9b9b", fontWeight: "bold", paddingBottom: "15px" }}  >Company</text>
                            <Link to="/" className="link">About</Link>
                            <Link to="/" className="link">Blog</Link>
                            <Link to="/" className="link">Careers</Link>
                            <Link to="/" className="link">Customers Group</Link>
                            <Link to="/" className="link">Warranty Program</Link>
                            <Link to="/" className="link">Earnings Program</Link>
                            <Link to="/" className="link">Inquiries Here</Link>
                        </div>
                    </div>
                    <div className="col p-4">
                        <Link to="/" className="bg-success text-light" style={{ textDecoration: 'none' }} >Subscribe me on Whatsapp</Link>
                    </div>
                </div>

                <div className="row row-cols-sm-2 row-cols-md-12 pt-5 p-3 ">
                    <div className="col-lg-12 p-2" >
                        <div className="fw-lighter d-flex justify-content-center p-2 " >Designed & Developed by @cell_bell</div>
                        <h4>Buy The Best Ergonomic Chairs Online</h4>
                        <p>
                            CellBell ergonomic office chairs are transforming workspaces and gaming experiences for the better, one chair at a time.
                        </p>
                        <h4>Our Brand Story</h4>
                        <p>
                            CellBell is the leading and most trusted brand for the best office and gaming chairs in India. Our ergonomic office chairs, office boss chairs, and basic chairs are the best in class,
                            offering maximum ease for long hours of comfortable working.
                            The adjustable features and advanced design of our executive chairs provide complete comfort and perfect back and neck support, making Cellbell executive and boss chairs the best office chairs in India.
                            The ergonomic design and high-end finish of our gaming chairs have forever revolutionized the world of gaming making us a leading game chair brand.
                        </p>
                        <h4>Our Mission Statement-</h4>
                        <p>
                            Our customers are our number one priority, and so are their health and well-being. We have always strived for excellence when it comes to delivering world-class products and services.
                            What started with the vision of delivering comfort to every doorstep has now taken the shape of a mission to deliver India's most comfortable and loved office and gaming chairs to every workplace and household.
                            All CellBell chairs are uniquely designed and skillfully crafted to fulfill all your day-to-day needs of comfort, care, and ease. Experienced craftsmanship and years of research-based development of our office and gaming chairs have helped us become Indias trusted brand for powerful gaming chairs.
                            As a leading game chair brand, we constantly innovate to enhance the quality of our services. CellBell is a leading game chair brand in the industry, and with every passing day, we are working dedicatedly towards staying true to your trust and our name.
                        </p>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default Navbar;