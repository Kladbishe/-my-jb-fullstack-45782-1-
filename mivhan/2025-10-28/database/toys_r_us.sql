-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 30, 2025 at 04:05 PM
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
-- Database: `toys_r_us`
--
CREATE DATABASE IF NOT EXISTS `toys_r_us` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `toys_r_us`;

-- --------------------------------------------------------

--
-- Table structure for table `audiences`
--

CREATE TABLE `audiences` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `audiences`
--

INSERT INTO `audiences` (`id`, `name`, `created_at`, `updated_at`) VALUES
('2ee7bdf2-b5aa-11f0-983b-5a8aa6089220', 'Kids', '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2ee7edea-b5aa-11f0-983b-5a8aa6089220', 'Youth', '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2ee7f0a7-b5aa-11f0-983b-5a8aa6089220', 'Adults', '2025-10-30 16:04:58', '2025-10-30 16:04:58');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `audience_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `audience_id`, `name`, `description`, `price`, `created_at`, `updated_at`) VALUES
('2eeaf838-b5aa-11f0-983b-5a8aa6089220', '2ee7bdf2-b5aa-11f0-983b-5a8aa6089220', 'Color Blocks', 'Educational game for children matching colors and shapes.', 59, '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2eeafde7-b5aa-11f0-983b-5a8aa6089220', '2ee7bdf2-b5aa-11f0-983b-5a8aa6089220', 'Catch the Star', 'Simple arcade game improving coordination and reaction.', 49, '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2eebed38-b5aa-11f0-983b-5a8aa6089220', '2ee7edea-b5aa-11f0-983b-5a8aa6089220', 'Space Ranger', 'Action shooter with missions and spaceship upgrades.', 89, '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2eebefd7-b5aa-11f0-983b-5a8aa6089220', '2ee7edea-b5aa-11f0-983b-5a8aa6089220', 'Pixel Craft', 'Creative sandbox game with crafting and exploration.', 79, '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2eecc75b-b5aa-11f0-983b-5a8aa6089220', '2ee7f0a7-b5aa-11f0-983b-5a8aa6089220', 'Tactical Manager', 'Strategy game with diplomacy, resources and planning.', 119, '2025-10-30 16:04:58', '2025-10-30 16:04:58'),
('2eecca75-b5aa-11f0-983b-5a8aa6089220', '2ee7f0a7-b5aa-11f0-983b-5a8aa6089220', 'Noir Detective', 'Story-driven mystery adventure with multiple endings.', 99, '2025-10-30 16:04:58', '2025-10-30 16:04:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audiences`
--
ALTER TABLE `audiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `audience_id` (`audience_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`audience_id`) REFERENCES `audiences` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
