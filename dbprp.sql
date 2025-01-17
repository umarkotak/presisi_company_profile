-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2018 at 02:37 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbprp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_prp`
--

CREATE TABLE `admin_prp` (
  `id` tinyint(4) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_prp`
--

INSERT INTO `admin_prp` (`id`, `username`, `password`) VALUES
(1, 'presisirekayasa', 'adminprp');

-- --------------------------------------------------------

--
-- Table structure for table `download_report`
--

CREATE TABLE `download_report` (
  `dr_id` tinyint(4) NOT NULL,
  `title` varchar(30) NOT NULL,
  `name` varchar(25) NOT NULL,
  `job_title` varchar(30) NOT NULL,
  `company` varchar(50) NOT NULL,
  `industry` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `download_report`
--

INSERT INTO `download_report` (`dr_id`, `title`, `name`, `job_title`, `company`, `industry`, `email`, `phone_number`, `address`) VALUES
(5, '', 'Malik', '', '', '', 'abdulchoiri19@gmail.com', '', 'H. Mali');

-- --------------------------------------------------------

--
-- Table structure for table `fifth_page`
--

CREATE TABLE `fifth_page` (
  `ffp_id` int(3) NOT NULL,
  `ffp_title` varchar(30) NOT NULL,
  `ffp_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fifth_page`
--

INSERT INTO `fifth_page` (`ffp_id`, `ffp_title`, `ffp_description`) VALUES
(1, 'WAREHOUSE DESIGN PROPOSAL', 'This proposal contained an initial design and images of our Logistics Distribution Centre that our company built for a customer. Having had the opportunity to work closely with our customer and to be entrusted with the construction of their desired facility, we are confident that our available facilities would meet the needs of your requirements.<br><br>Reception, offices, and overall facade of our facilities can be easily redesign and will not translate into a higher cost or a compromise operation.');

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `file_id` tinyint(4) NOT NULL,
  `filename` varchar(25) NOT NULL,
  `extention` varchar(6) NOT NULL,
  `labelname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`file_id`, `filename`, `extention`, `labelname`) VALUES
(13, 'logo_G5p@9', 'jpg', 'Logo');

-- --------------------------------------------------------

--
-- Table structure for table `first_page`
--

CREATE TABLE `first_page` (
  `fp_id` int(3) NOT NULL,
  `fp_title` varchar(15) NOT NULL,
  `fp_description` varchar(535) NOT NULL,
  `fp_subdescription` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `first_page`
--

INSERT INTO `first_page` (`fp_id`, `fp_title`, `fp_description`, `fp_subdescription`) VALUES
(1, 'HOMEPAGE', 'Your trusted partner for logistics and supply chain needs.', 'none'),
(2, 'COMPANY', 'Presisi owns, constructs, develops, and manages sustainable logistics facilities and provides innovative supply chain solutions across Indonesia.', 'none'),
(3, 'WHAT WE DO', 'At Presisi, we do not just build storage facilities, we collaborate with our clients to help them unlock their competitive advantages through our high quality buildings, and efficient logistics and supply chain services.', 'none'),
(4, 'WE BUILD', 'Our customers are the lifeblood of our organization.', 'Presisi adopts a customer-focused culture. We bend-over-backwards to make sure our facilities exceed our customers’ needs and expectations. Part of the process of providing a high-quality building for our customers is by listening to their needs.<br><br>When developing a new facility for our customers, our experienced team collaborate with our clients from the sourcing of the land through the construction, and ultimately the handover of the building. Our Build-to-Suit development service allow our customers to have a customized building that meet their specific requirements down to the last detail. In the process of designing the premise, our customers can rely on our high level of attentiveness to build an efficient, fully-optimized, and personalized warehouse facility. We then obtain a planning and building permission prior to the actual construction, and deliver the finished premise according to the strict budget and schedule.<br><br>In addition to our Build-to-Suit development service, we also offer readily-available storage facilities in prime locations throughout Indonesia.<br><br>As a valued business partner, our customers can trust Presisi to deliver high-spec buildings they need in prime locations in a timely and cost-friendly manner.'),
(5, 'WE OWN', 'Our buildings provide a firm foundation and a safe residence for your business.', 'With “Precision” carved into the fabric of our motto, our customers can expect to have a high level of personalized service tailored precisely to their needs and throughout their tenancy.<br><br>We understand the importance of logistics and infrastructure in a business operation, and that is why it is always our main goal to provide more than just a space for our customers, but a home; a solid foundation for their business to grow.<br><br>Like how we build our home, our facilities are constructed with the same careful measure and considerations brick-by-brick––selecting only the finest materials to ensure its sustainability. As the owner of our buildings, we do not intend on selling our properties. Thus, providing customers with consistent long-term visibility of future expenses and high level of personalized service throughout their tenancy however long they may be.<br><br>Moreover, rest assure that our facilities will be professionally maintained and regularly managed by us. By leaving the construction of the facility and its maintenance to us, our customers can use their capital for other investment opportunities and focus more on their core business.'),
(6, 'WE MANAGE', 'Well-maintained facility and individualized services everyday¬-all year round.', 'Like developing friendships, here at Presisi, we make it our priority to get to know all of our customers on a personal level. This allow us to have a greater understanding of our customers’ business model and their requirements, and provide a high-quality level of personalized service they expect.<br>Equipped with an in-depth market knowledge, we are able to put forward innovative and personalized solutions that meets customers’ specific needs, solve problems, and improve efficiency.<br><br>Our management service includes but not limited to:<ul><li>The management and maintenance of each individual warehouse property</li><li>The management of power stations and waste water</li><li>The maintenance of sprinkler, emergency and security systems</li><li>Arranging favourable and cost-friendly insurance terms</li><li>Guaranteeing safe and clean premises</li><li>Provide clear information on the long-lastingness of different pieces of equipment and how much they cost</li><li>And more…</li>\r\n</ul>We are committed to walk the extra mile to exercise fast response and deliver precise solutions when dealing with any issues. To uphold such commitments, we assigned each of our customers their own Property Manager. By having personal relationships with all our customers, we are capable of providing them with the high standard of individualized services and reliability they expect.'),
(7, 'WE INVEST', 'We do not just invest in buildings; we invest in the future.', 'According to a British real estate tycoon, Lord Harold Samuel, the three most important factors in buying a property are location, location, location.<br><br>Here at Presisi, we invest in lands and properties that are strategically located, and with near access to toll roads, industrial areas and Jakarta’s Central Business District.<br><br>Should our customers request for a storage facility in other regions of Indonesia outside of Jakarta, our experts are capable of curating the most strategic locations to build a warehouse. This includes having knowledge on:<ul><li>Locations with the best access to factories, business districts, industrial regions, ports, and airports</li><li>Issues pertaining to traffic</li><li>Lands with the potential of becoming an in-demand location in the future</li><li>The type of buildings that are suitable to build in the areas</li><li>Planning permissions</li><li>Whether local authority and society support new development</li><li>And many more…</li></ul>We understand the rapid transformation in technology, and that is why in addition to acquiring properties in prime locations, we also invest in the latest innovation to improve productivity, increase utilization and reduce cost in a warehouse operation.<br><br>Last but not least, we place great importance in the relationships we have with all our customers. If they have questions, we answer. If they have issues, we provide solutions. If they have requests, we deliver. Through our various service offerings, years of experience, excellent consistency and clear transparency, our customers can enjoy a long and fruitful relationship with us.');

-- --------------------------------------------------------

--
-- Table structure for table `fourth_page`
--

CREATE TABLE `fourth_page` (
  `ftp_id` int(3) NOT NULL,
  `ftp_title` varchar(20) NOT NULL,
  `ftp_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fourth_page`
--

INSERT INTO `fourth_page` (`ftp_id`, `ftp_title`, `ftp_description`) VALUES
(1, 'Grow with Presisi', 'At Presisi, we truly value our people we believe in their capabilities and potentials. We see them as qualified, uniquely talented and supportive team members whose contributions we deeply appreciate. As a company that has been around for many years, we attributed the success of our firm to our dedicated employees. Our long-standing position as being one of Indonesia\'s warehouse, logistics, and supply chain solutions provider is only made possible by creating a fulfilling working environment for our people. We strive to create an environment which promote integrity, respect, and ethical behaviour within our corporation and beyond. Each and every one of our employees are encouraged to take initiatives, participate in active discussions in different teams, and make a difference. <br><br>If innovation, warehouse, logistics and supply chain are your passion; success and excellence are what you strive for; be a part of our growing team.<br><br><b>Send your CV to: <a href=\"mailto:info@presisirekayasa.com\" target=\"_top\">info@presisirekayasa.com</a></b><br><br><small>Data compliance: Please provide us with the necessary information such as resume or curriculum vitae. By providing us with such information, you agree that we may use these materials for the purpose of considering your application. If your application is unsuccessful, we may keep the information for future consideration for a limited period of time. Your information will be stored in accordance to the country\'s data protection laws.</small>');

-- --------------------------------------------------------

--
-- Table structure for table `second_page`
--

CREATE TABLE `second_page` (
  `sp_id` int(3) NOT NULL,
  `sp_title` varchar(15) NOT NULL,
  `sp_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `second_page`
--

INSERT INTO `second_page` (`sp_id`, `sp_title`, `sp_description`) VALUES
(1, 'WHO WE ARE', 'PT Presisi Rekayasa Persada (PRP) is a warehouse, logistics, and supply chain solutions provider that was established in 2006 by a group of logistics professionals with experiences from various industries. With 13,000 islands and a population of over 240 million people, the group believes that international corporations could thrive in and benefit from Indonesia\'s extensive market by having the proper infrastructures in place.<br><br>In the exciting Indonesian market, Presisi believes that the synergy between international and local companies cultivates further economic growth for both parties. At Presisi, we do not just build infrastructures, we collaborate together with our clients to unlock their competitive advantage through our innovative logistics and supply chain services. We carefully analyse the requirements and the needs of our clients\', and build our solutions on warehousing and facility purposes prior to incorporating it with our distribution services. With our excellent warehouse and distribution services, and the support of bright engineers and employees, we believe that Presisi will maintain its success and continue to grow regionally.'),
(2, 'VISION', 'To be the leader in warehouse, logistics and supply chain solutions provider.'),
(3, 'MISSION', 'To be a reliable business partner by providing high value services for our partners and shareholders.'),
(4, 'OUR VALUES', 'Deliver excellent services<br>Cost conscious<br>Adaptive and flexible<br>Safe and environmental-friendly<br>People and leader empowerment'),
(5, 'LEGALITY', 'Presisi Rekayasa holds compliance with legality highly. Part of becoming a responsible and reliable company is ensuring that our firm complies with the country\'s rules and regulation. We regularly ensure that legal paperwork is in accordance to government\'s regulations and permits are secured.<br><br>Akta Perusahaan No. 13 tanggal 28 September 2006 Notaris Sri Agustini, SH, Jakarta<br>SIUP PDN 01359/1.824.271<br>TDP 09.03.006118<br>NPWP 02.579.292.0-019.000');

-- --------------------------------------------------------

--
-- Table structure for table `sixth_page`
--

CREATE TABLE `sixth_page` (
  `sxp_id` int(2) NOT NULL,
  `office_name` varchar(30) NOT NULL,
  `office_address` varchar(100) NOT NULL,
  `sxp_description` varchar(100) NOT NULL,
  `office_phone` varchar(20) NOT NULL,
  `office_fax` varchar(20) NOT NULL,
  `office_email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sixth_page`
--

INSERT INTO `sixth_page` (`sxp_id`, `office_name`, `office_address`, `sxp_description`, `office_phone`, `office_fax`, `office_email`) VALUES
(1, 'PT. Presisi Rekayasa Persada', 'Jl. Sultan Iskandar Muda, Kebayoran Lama, Jakarta Selatan 12240, Indonesia', 'Gandaria 8 Office 3rd Floor Unit C', '+62 21 8378 1718', '+62 21 8378 1718', 'info@presisirekayasa.com');

-- --------------------------------------------------------

--
-- Table structure for table `third_page`
--

CREATE TABLE `third_page` (
  `tp_id` int(3) NOT NULL,
  `tp_title` varchar(50) NOT NULL,
  `tp_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `third_page`
--

INSERT INTO `third_page` (`tp_id`, `tp_title`, `tp_description`) VALUES
(1, 'SERVICES1', 'Our company\'s name, Presisi Rekayasa Persada, is an Indonesian translation for precision engineering. Ever since its establishment in 2006, Presisi Rekayasa continuously operates up to its name with \"PRECISION\" being the underlying value we uphold in our company culture. Our key value is applied to all our work, starting from the initial planning to actual execution, guaranteeing precision in all work and aspects to achieve the best performance in quality, time, and cost.'),
(2, 'SERVICES2', 'Our vision has also been very clear from the start: to be the leader in warehouse, logistics, and supply chain solutions provider. This is achieved through having modern and superior warehouses equipped with the latest specifications, finest sustainable materials, and advanced innovations that corresponded with our customers\' requirements. Our strategy is further fortified by our position as being one of the main providers of innovative logistics and supply-chain services in Indonesia-allowing for optimal solutions in all aspects.'),
(3, 'BUILD TO SUIT DEVELOPMENT', 'A Build-to-Suit development is a customized warehouse and property solutions which is often opt for by companies with worldwide presence. This service allows international companies to enter emerging market with ease by having quality warehouses, whilst still maintaining global standards without having to bear the burden of a large capital expenditure.'),
(4, 'CONSIDERATE', 'We take into consideration your company\'s unique requirements in order to fulfil your corporate and operational needs.'),
(5, 'LONG TERM LEASE', 'When opting for a Build-to-Suit service, you are committed to a long-term lease, and reap the benefit of long-term reliability with respect to location and rental rates.'),
(6, 'RESPONSIBLE', 'We are responsible for bearing the capital expenditure that comes with developing and owning of the building.'),
(7, 'SECURE', 'Whether it\'s security or accessibility, you can maintain control and authority over the asset management of the property.'),
(8, 'WAREHOUSE RENTAL', 'Whether it is an SME looking for extra space to grow or simply not ready to commit to a long-term lease that comes with our Build-to-Suit development, whatever the situation may be, our ready-to-use facilities offer a great solution for those looking for a small or short or long-term rental. Opting for a warehouse rental allow our customers to view warehousing as operating expenses rather than as capital investments, thus saving them from the trouble of having to build it from zero. All of our warehouses are built according to the international standards, thus ensuring its quality and sustainability.'),
(9, 'WAREHOUSE RESOURCE 1', '<ul style=\"text-align: left;\"><li>Manpower</li><li>Trucks</li><li>Handling Equipment<ul><li>Manual and mechanical handling equipment<ul><li>Trolleys, cages, carts and garment rails.</li><li>Hand pallet truck, powered pallet truck and manual stacker truck.</li><li>Forklift trucks.</li><li>Low-level order pickers and towing tractors.</li></ul></li><li>High-level order pickers</li><li>Conveyors</li></ul></li></ul>'),
(10, 'WAREHOUSE RESOURCE 2', '<ul style=\"text-align: left;\"><li>Storage equipment<ul><li>Floor/Bulk storage</li><li>Standard pallet racking</li><li>Shelving</li><li>Carousels<ul><li>Horizontal carousels</li><li>Vertical carousels</li></ul></li></ul></li><li>Warehouse Management System</li><li>And many more</li></ul>'),
(11, 'WAREHOUSE CAPACITY', 'Facility location: Delta Silikon 2. Lippo Cikarang Industrial Estate, Bekasi, West Java <br>Our storage facility has an indoor storage area of 20,000 m2, an outdoor storage area of 5,000 m2 and was built upon a land of over 3.3 Ha. The facility is equipped with 24 ports and has a height of over 15 metres which allowed for clear air circulation. The environmental friendly skylight reduced the need for electricity and generators are available to supply self-supportive power when needed.'),
(12, 'CIVIL AND STRUCTURAL', '<ol style=\"text-align: justify;\"><li><b>Indoor storage:</b> Capable to cater for 4 tonnes/m2</li><li><b>Outdoor storage:</b> Capable to cater for 2 tonnes/m2</li><li><b>Road:</b> Concrete foundation with the ability to support 20 trucks with 40 ft. container.</li><li><b>Canopy:</b> Cantilevered off the building wall with 6 meters at loading bay.</li><li><b>Loading bays:</b> 3 loading docks with an elevated 1.2-metres loading bay.</li><li><b>Electricity:</b> Over 350 KVA expandable to 450 KVA with 2 standby generator set for electricity back-up.</li><li><b>Industrial water supply:</b> Supplied by Kawasan Industri Lippo Cikarang.</li><li><b>Safety equipment:</b> Full safety measures with fire hydrant, host reel, portable extinguisher and water host.</li><li><b>Main road:</b> Concrete road with a width of 6-metres and two-ways traffic.</li></ol>'),
(13, 'VALUE ADDED', '<ol style=\"text-align: justify;\"><li>15 minutes from exit toll road Cikarang Barat (Cikampek Toll Road).</li><li>Approximately 50 km from Central Business District in Jakarta - Sudirman.</li><li>Premises are built on safe and secured industrial areas.</li><li>Nearby several industrial areas: Kawasan Industri Jababeka, East Jakarta Industrial Part (EJIP), Kawasan Industri MM2100 Cibitung and Lippo Cikarang Delta Silikon 1.</li><li>New access toll roads.</li><li>Nature conscious, sustainable and environmentally-friendly facility.</li><li>End-to-end solutions.</li></ol>'),
(14, 'DISTRIBUTION SERVICE', 'We are committed to serving you the highest quality of services from end-to-end. Our distribution service guarantees that the transport of goods from one location to another are feasible, safe, and prompt. We have a number of company-owned vehicles available to cater your needs and can be adjusted to suit your business as your requirements grow. Furthermore, our extensive network allows for other freight services to be carried out when needed. Health and safety during the distribution operations are paramount, and part of the process of achieving a high-quality service is ensuring that:<br><br><span style=\"display:inline-block; width: 50px;\"></span>1. Employees are required to undertake training and encouraged to report issues. <br><span style=\"display:inline-block; width: 50px;\"></span>2. Vehicles are regularly maintained. <br><span style=\"display:inline-block; width: 50px;\"></span>3. Logistics Management Service <br><span style=\"display:inline-block; width: 50px;\"></span>4. Repair centre and spare part management'),
(15, 'SUPPLY CHAIN MANAGEMENT', '<p style=\"text-align: justify; margin-top: 20px;\"><span style=\"display:inline-block; width: 50px;\"></span>We believe that effective process leads to real results. Here at Presisi, we integrate technology, business process and our client\'s company culture to develop supply chain strategies that could help them thrive in today\'s uncertain environment. When designing an effective supply chain strategy, we do not believe in a one-size-fits-all method. Every client is unique, and every strategy is designed to provide them with the best solution for their business. Our evaluation starts from the end demand, then work backwards through production and supply, and ultimately identifying the most logical facility designs and locations along with transportation options.</p><p style=\"text-align: justify;\"><span style=\"display:inline-block; width: 50px;\"></span>Following the evaluation process is the design; where we create an efficient logistics and supply chain network, and facility optimizations. To ensure a successful execution, our design team stays involved during the implementation process. Such involvement includes the management of people, process and integration of technology. We provide our clients with real-time visibility throughout their whole supply chain process, which help them to continually raise the bar for constant improvements, and ultimately obtain the desired results.</p><p style=\"text-align: justify;\"><span style=\"display:inline-block; width: 50px;\"></span>Become a forward-looking company with Presisi today as we embark on this journey of logistics and supply chain management together. By treating supply chain as a dynamic hedge against uncertainty, actively reconfiguring and examining, we help our clients embrace the new environment\'s growing uncertainty and complexity.</p>');

-- --------------------------------------------------------

--
-- Table structure for table `wwd_page`
--

CREATE TABLE `wwd_page` (
  `wwd_id` int(3) NOT NULL,
  `wwd_title` varchar(50) NOT NULL,
  `wwd_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wwd_page`
--

INSERT INTO `wwd_page` (`wwd_id`, `wwd_title`, `wwd_description`) VALUES
(1, 'WE BUILD', '<p style=\"text-align: justify;\">Presisi adopts a customer-focused culture. We bend-over-backwards to make sure our facilities exceed our customers needs and expectations. Part of the process of providing a high-quality building for our customers is by listening to their needs.</p><p style=\"text-align: justify;\">When developing a new facility for our customers, our experienced team collaborate with our clients from the sourcing of the land through the construction, and ultimately the handover of the building. Our Build-to-Suit development service allow our customers to have a customized building that meet their specific requirements down to the last detail. In the process of designing the premise, our customers can rely on our high level of attentiveness to build an efficient, fully-optimized, and personalized warehouse facility. We then obtain a planning and building permission prior to the actual construction, and deliver the finished premise according to the strict budget and schedule.</p><p style=\"text-align: justify;\">In addition to our Build-to-Suit development service, we also offer readily-available storage facilities in prime locations throughout Indonesia.</p><p style=\"text-align: justify;\">As a valued business partner, our customers can trust Presisi to deliver high-spec buildings they need in prime locations in a timely and cost-friendly manner.</p>'),
(2, 'WE OWN', '<p style=\"text-align: justify;\">With precision carved into the fabric of our motto, our customers can expect to have a high level of personalized service tailored precisely to their needs and throughout their tenancy.</p><p style=\"text-align: justify;\">We understand the importance of logistics and infrastructure in a business operation, and that is why it is always our main goal to provide more than just a space for our customers, but a home; a solid foundation for their business to grow.</p><p style=\"text-align: justify;\">Like how we build our home, our facilities are constructed with the same careful measure and considerations brick-by-brick-selecting only the finest materials to ensure its sustainability. As the owner of our buildings, we do not intend on selling our properties. Thus, providing customers with consistent long-term visibility of future expenses and high level of personalized service throughout their tenancy however long they may be.</p><p style=\"text-align: justify;\">Moreover, rest assure that our facilities will be professionally maintained and regularly managed by us. By leaving the construction of the facility and its maintenance to us, our customers can use their capital for other investment opportunities and focus more on their core business.</p>'),
(3, 'WE MANAGE', '<p style=\"text-align: justify;\">Like developing friendships, here at Presisi, we make it our priority to get to know all of our customers on a personal level. This allow us to have a greater understanding of our customers business model and their requirements, and provide a high-quality level of personalized service they expect. </p><p style=\"text-align: justify;\">Equipped with an in-depth market knowledge, we are able to put forward innovative and personalized solutions that meets customers specific needs, solve problems, and improve efficiency. </p><p style=\"text-align: justify;\">Our management service includes but not limited to:<ol style=\"text-align: justify;\"><li>The management and maintenance of each individual warehouse property</li><li>The management of power stations and waste water</li><li>The maintenance of sprinkler, emergency and security systems</li><li>Arranging favourable and cost-friendly insurance terms</li><li>Guaranteeing safe and clean premises</li><li>Provide clear information on the long-lastingness of different pieces of equipment and how much they cost</li><li>And more...</li></ol></p><p style=\"text-align: justify;\">We are committed to walk the extra mile to exercise fast response and deliver precise solutions when dealing with any issues. To uphold such commitments, we assigned each of our customers their own Property Manager. By having personal relationships with all our customers, we are capable of providing them with the high standard of individualized services and reliability they expect.</p>'),
(5, 'WE INVEST', '<p style=\"text-align: justify;\">According to a British real estate tycoon, Lord Harold Samuel, the three most important factors in buying a property are location, location, location.</p><p style=\"text-align: justify;\">Here at Presisi, we invest in lands and properties that are strategically located, and with near access to toll roads, industrial areas and Jakarta\'s Central Business District.\r\n</p><p style=\"text-align: justify;\">Should our customers request for a storage facility in other regions of Indonesia outside of Jakarta, our experts are capable of curating the most strategic locations to build a warehouse. This includes having knowledge on:<ol style=\"text-align: justify;\"><li>Locations with the best access to factories, business districts, industrial regions, ports, and airports</li><li>Issues pertaining to traffic</li><li>Lands with the potential of becoming an in-demand location in the future</li><li>The type of buildings that are suitable to build in the areas</li><li>Planning permissions</li><li>Whether local authority and society support new development</li><li>And many more...</li></ol>\r\n</p><p style=\"text-align: justify;\">We understand the rapid transformation in technology, and that is why in addition to acquiring properties in prime locations, we also invest in the latest innovation to improve productivity, increase utilization and reduce cost in a warehouse operation.</p><p style=\"text-align: justify;\">Last but not least, we place great importance in the relationships we have with all our customers. If they have questions, we answer. If they have issues, we provide solutions. If they have requests, we deliver. Through our various service offerings, years of experience, excellent consistency and clear transparency, our customers can enjoy a long and fruitful relationship with us.</p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_prp`
--
ALTER TABLE `admin_prp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `download_report`
--
ALTER TABLE `download_report`
  ADD PRIMARY KEY (`dr_id`);

--
-- Indexes for table `fifth_page`
--
ALTER TABLE `fifth_page`
  ADD PRIMARY KEY (`ffp_id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `first_page`
--
ALTER TABLE `first_page`
  ADD PRIMARY KEY (`fp_id`);

--
-- Indexes for table `fourth_page`
--
ALTER TABLE `fourth_page`
  ADD PRIMARY KEY (`ftp_id`);

--
-- Indexes for table `second_page`
--
ALTER TABLE `second_page`
  ADD PRIMARY KEY (`sp_id`);

--
-- Indexes for table `sixth_page`
--
ALTER TABLE `sixth_page`
  ADD PRIMARY KEY (`sxp_id`);

--
-- Indexes for table `third_page`
--
ALTER TABLE `third_page`
  ADD PRIMARY KEY (`tp_id`);

--
-- Indexes for table `wwd_page`
--
ALTER TABLE `wwd_page`
  ADD PRIMARY KEY (`wwd_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_prp`
--
ALTER TABLE `admin_prp`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `download_report`
--
ALTER TABLE `download_report`
  MODIFY `dr_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fifth_page`
--
ALTER TABLE `fifth_page`
  MODIFY `ffp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `file_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `first_page`
--
ALTER TABLE `first_page`
  MODIFY `fp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `fourth_page`
--
ALTER TABLE `fourth_page`
  MODIFY `ftp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `second_page`
--
ALTER TABLE `second_page`
  MODIFY `sp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sixth_page`
--
ALTER TABLE `sixth_page`
  MODIFY `sxp_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `third_page`
--
ALTER TABLE `third_page`
  MODIFY `tp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `wwd_page`
--
ALTER TABLE `wwd_page`
  MODIFY `wwd_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
