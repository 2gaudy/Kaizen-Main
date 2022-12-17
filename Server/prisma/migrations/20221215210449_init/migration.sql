-- CreateTable
CREATE TABLE `users` (
    `user_name` VARCHAR(55) NOT NULL,
    `pass_word` VARCHAR(55) NOT NULL,
    `email` VARCHAR(55) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
