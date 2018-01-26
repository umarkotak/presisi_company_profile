-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2018 at 04:29 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

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
(1, 'Grow with Presisi', 'At Presisi, we truly value our people we believe in their capabilities and potentials. We see them as qualified, uniquely talented and supportive team members whose contributions we deeply appreciate. As a company that has been around for many years, we attributed the success of our firm to our dedicated employees. Our long-standing position as being one of Indonesia\'s warehouse, logistics, and supply chain solutions provider is only made possible by creating a fulfilling working environment for our people. We strive to create an environment which promote integrity, respect, and ethical behaviour within our corporation and beyond. Each and every one of our employees are encouraged to take initiatives, participate in active discussions in different teams, and make a difference. <br><br>If innovation, warehouse, logistics and supply chain are your passion; success and excellence are what you strive for; be a part of our growing team.<br><br><b>Send your CV to: <a href=\"mailto:career@presisirekayasa.com\" target=\"_top\">career@presisirekayasa.com</a></b><br><br><small>Data compliance: Please provide us with the necessary information such as resume or curriculum vitae. By providing us with such information, you agree that we may use these materials for the purpose of considering your application. If your application is unsuccessful, we may keep the information for future consideration for a limited period of time. Your information will be stored in accordance to the country\'s data protection laws.</small>');

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
(1, 'WHO WE ARE', 'Presisi Rekayasa is a warehouse, logistics, and supply chain solutions provider that was established in 2006 by a group of logistics professionals with experiences from various industries. With 13,000 islands and a population of over 240 million people, the group believes that international corporations could thrive in and benefit from Indonesia\'s extensive market by having the proper infrastructures in place.<br><br>In the exciting Indonesian market, Presisi Rekayasa (or Presisi Logistics..?) believes that the synergy between international and local companies cultivates further economic growth for both parties. At Presisi Rekayasa, we do not just build infrastructures, we collaborate together with our clients to unlock their competitive advantage through our innovative logistics and supply chain services. We carefully analyse the requirements and the needs of our clients\' and build our solutions on warehousing and facility purposes prior to incorporating it with our distribution services. With our excellent warehouse and distribution services, and the support of bright engineers and employees, we believe that Presisi Rekayasa will maintain its success and continue to grow regionally.'),
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
(1, 'SERVICES1', 'Our company’s name, Presisi Rekayasa Persada, is an Indonesian translation for precision engineering. Ever since its establishment in 2006, Presisi Rekayasa continuously operates up to its name with “PRECISION” being the underlying value we uphold in our company culture. Our key value is applied to all our work, starting from the initial planning to actual execution, guaranteeing precision in all work and aspects to achieve the best performance in quality, time, and cost.'),
(2, 'SERVICES2', 'Our vision has also been very clear from the start: to be the leader in warehouse, logistics, and supply chain solutions provider. This is achieved through having modern and superior warehouses equipped with the latest specifications, finest sustainable materials, and advanced innovations that corresponded with our customers’ requirements. Our strategy is further fortified by our position as being one of the main providers of innovative logistics and supply-chain services in Indonesia—allowing for optimal solutions in all aspects.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fifth_page`
--
ALTER TABLE `fifth_page`
  ADD PRIMARY KEY (`ffp_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fifth_page`
--
ALTER TABLE `fifth_page`
  MODIFY `ffp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `tp_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
