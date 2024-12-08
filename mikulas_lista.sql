-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Dec 08. 18:33
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `mikulas_lista`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gifts`
--

CREATE TABLE `gifts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `weigth` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `gifts`
--

INSERT INTO `gifts` (`id`, `name`, `material`, `weigth`) VALUES
(1, 'Toy Train', 'wood', 1250),
(2, 'Action Figure', 'plastic', 300),
(3, 'Puzzle', 'cardboard', 800),
(4, 'Toy Car', 'metal', 2000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gift_kid`
--

CREATE TABLE `gift_kid` (
  `kid` int(11) DEFAULT NULL,
  `gift` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `gift_kid`
--

INSERT INTO `gift_kid` (`kid`, `gift`, `id`) VALUES
(1, 1, 1),
(1, 2, 2),
(2, 3, 3),
(3, 4, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kids`
--

CREATE TABLE `kids` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `behaved` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `kids`
--

INSERT INTO `kids` (`id`, `name`, `address`, `behaved`) VALUES
(1, 'John Doe', 'North Pole', 1),
(2, 'Jane Smith', 'South Pole', 0),
(3, 'Jack Black', 'Wonderland', 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gift_kid`
--
ALTER TABLE `gift_kid`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gift` (`gift`),
  ADD KEY `kid` (`kid`);

--
-- A tábla indexei `kids`
--
ALTER TABLE `kids`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `gifts`
--
ALTER TABLE `gifts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `gift_kid`
--
ALTER TABLE `gift_kid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `kids`
--
ALTER TABLE `kids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `gift_kid`
--
ALTER TABLE `gift_kid`
  ADD CONSTRAINT `gift_kid_ibfk_1` FOREIGN KEY (`kid`) REFERENCES `kids` (`id`),
  ADD CONSTRAINT `gift_kid_ibfk_2` FOREIGN KEY (`gift`) REFERENCES `gifts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
