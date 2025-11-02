-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 01, 2025 at 09:02 AM
-- Server version: 9.4.0
-- PHP Version: 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trips_country`
--
CREATE DATABASE IF NOT EXISTS `trips_country` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `trips_country`;

-- --------------------------------------------------------

--
-- Table structure for table `regions`
--

CREATE TABLE `regions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `regions`
--

INSERT INTO `regions` (`id`, `name`, `created_at`, `updated_at`) VALUES
('7f1c41b5-8a8d-4f2e-8b8f-3a1e6eaa1001', 'North', '2025-11-01 09:01:55', '2025-11-01 09:01:55'),
('9b8d1345-4b32-4a92-9b2c-8b2b0e541003', 'South', '2025-11-01 09:01:55', '2025-11-01 09:01:55'),
('a8e251f1-7e44-4cbe-9ef7-bec5b6b61004', 'Coastal Plain', '2025-11-01 09:01:55', '2025-11-01 09:01:55'),
('c3e32f42-573d-48e9-954f-48d7eec91002', 'Center', '2025-11-01 09:01:55', '2025-11-01 09:01:55'),
('e53e3b41-2e22-47e3-9a8b-5f4bb7741005', 'Shephelah', '2025-11-01 09:01:55', '2025-11-01 09:01:55');

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

CREATE TABLE `sites` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `region_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price_adult` int DEFAULT NULL,
  `price_child` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sites`
--

INSERT INTO `sites` (`id`, `region_id`, `name`, `description`, `price_adult`, `price_child`, `created_at`, `updated_at`) VALUES
('a1d1b4a1-22e7-46a5-9a7b-0011', '7f1c41b5-8a8d-4f2e-8b8f-3a1e6eaa1001', 'Banias Nature Reserve', 'A stunning waterfall and hiking trail in the Golan Heights.', 35, 20, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0012', '7f1c41b5-8a8d-4f2e-8b8f-3a1e6eaa1001', 'Mount Hermon', 'Israel’s only ski resort, open in winter for skiing and in summer for hiking.', 50, 30, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0013', 'a8e251f1-7e44-4cbe-9ef7-bec5b6b61004', 'Rosh Hanikra', 'White cliffs and sea caves on the northern border.', 49, 25, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0014', 'a8e251f1-7e44-4cbe-9ef7-bec5b6b61004', 'Caesarea National Park', 'Ancient Roman port city with amphitheater and aqueduct.', 40, 20, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0015', 'c3e32f42-573d-48e9-954f-48d7eec91002', 'Yarkon Park', 'Large urban park in Tel Aviv with trails and picnic areas.', 0, 0, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0016', '9b8d1345-4b32-4a92-9b2c-8b2b0e541003', 'Ein Gedi Nature Reserve', 'Desert oasis with waterfalls near the Dead Sea.', 28, 14, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0017', '9b8d1345-4b32-4a92-9b2c-8b2b0e541003', 'Timna Park', 'Desert park near Eilat with rock formations and hiking routes.', 49, 25, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0018', 'e53e3b41-2e22-47e3-9a8b-5f4bb7741005', 'Beit Guvrin Caves', 'Network of caves and archaeological sites in the Shephelah region.', 39, 20, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0019', 'e53e3b41-2e22-47e3-9a8b-5f4bb7741005', 'Tel Lachish National Park', 'Ancient biblical city ruins with panoramic views.', 25, 12, '2025-11-01 09:02:03', '2025-11-01 09:02:03'),
('a1d1b4a1-22e7-46a5-9a7b-0020', 'c3e32f42-573d-48e9-954f-48d7eec91002', 'Jerusalem Forest', 'Forest with hiking trails and scenic viewpoints near Jerusalem.', 0, 0, '2025-11-01 09:02:03', '2025-11-01 09:02:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `region_id` (`region_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sites`
--
ALTER TABLE `sites`
  ADD CONSTRAINT `sites_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
