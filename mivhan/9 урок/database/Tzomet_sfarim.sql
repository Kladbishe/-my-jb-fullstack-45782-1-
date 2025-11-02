-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 01, 2025 at 05:16 PM
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
-- Database: `Tzomet_sfarim`
--
CREATE DATABASE IF NOT EXISTS `Tzomet_sfarim` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `Tzomet_sfarim`;

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `author_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`author_id`, `name`, `last_name`, `created_at`, `updated_at`) VALUES
('1ce5d3a9-6cb4-41b2-ae3f-99cbf0b6c0da', 'Agatha', 'Christie', '2025-11-01 17:15:37', '2025-11-01 17:15:37'),
('2f3f1e48-5a62-4711-a82b-82a7f31f8b9a', 'Yuval Noah', 'Harari', '2025-11-01 17:15:37', '2025-11-01 17:15:37'),
('adf9b2c1-48e3-4c0e-bb5a-f1b182df1e64', 'Leo', 'Tolstoy', '2025-11-01 17:15:37', '2025-11-01 17:15:37'),
('c7a54b09-2a9d-4c7e-8db9-b1e6d6ab45a4', 'George', 'Orwell', '2025-11-01 17:15:37', '2025-11-01 17:15:37'),
('f6a1d9b4-3925-4f88-98bb-7e3a9f2d2231', 'Fyodor', 'Dostoevsky', '2025-11-01 17:15:37', '2025-11-01 17:15:37');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `author_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `book_name` varchar(255) NOT NULL,
  `num_of_pages` int NOT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `author_id`, `book_name`, `num_of_pages`, `price`, `created_at`, `updated_at`) VALUES
('37a8fc21-90e1-4e72-95cf-8c449f218c19', '1ce5d3a9-6cb4-41b2-ae3f-99cbf0b6c0da', 'Murder on the Orient Express', 320, 80, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('39f7a8e6-cbc5-4f84-b7e8-7fd13449c823', 'adf9b2c1-48e3-4c0e-bb5a-f1b182df1e64', 'Anna Karenina', 864, 149, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('5f97a8cb-11b9-48ef-9b54-1b6c1fa8a7b9', 'adf9b2c1-48e3-4c0e-bb5a-f1b182df1e64', 'War and Peace', 1225, 200, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('7d4bc352-28b6-4b9d-9225-b2b20ec2a04f', 'f6a1d9b4-3925-4f88-98bb-7e3a9f2d2231', 'The Idiot', 736, 139, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('89dc0cfa-b9bb-4b31-83ce-2b5d09ce87f2', '1ce5d3a9-6cb4-41b2-ae3f-99cbf0b6c0da', 'And Then There Were None', 256, 69, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('8b4b10d0-4b61-4e10-9013-3e8d49a458ee', '2f3f1e48-5a62-4711-a82b-82a7f31f8b9a', 'Sapiens: A Brief History of Humankind', 512, 119, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('b26d5c4f-7aa1-4e2e-bd6e-9dfbb6ff59b2', 'f6a1d9b4-3925-4f88-98bb-7e3a9f2d2231', 'Crime and Punishment', 672, 129, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('da2f4f61-b9de-4c62-8f57-2e17a0ce46a3', '2f3f1e48-5a62-4711-a82b-82a7f31f8b9a', 'Homo Deus: A Brief History of Tomorrow', 480, 129, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('e50c217f-bfa2-4d73-bef0-1de7b189ac8a', 'c7a54b09-2a9d-4c7e-8db9-b1e6d6ab45a4', '1984', 328, 89, '2025-11-01 17:15:46', '2025-11-01 17:15:46'),
('f1a782e9-7230-4d11-9464-0e47de2dc8b1', 'c7a54b09-2a9d-4c7e-8db9-b1e6d6ab45a4', 'Animal Farm', 112, 59, '2025-11-01 17:15:46', '2025-11-01 17:15:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
