-- Table: public.people

-- DROP TABLE IF EXISTS public.people;
CREATE TABLE IF NOT EXISTS public.people
(
    id integer NOT NULL,
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    age integer,
    email character varying(255) COLLATE pg_catalog."default",
    hobbies character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT people_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.people
    OWNER to postgres;
-- Inserting data
INSERT INTO public.people (id, first_name, last_name, age, email, hobbies) VALUES
                                                                               (1, 'Adoree', 'Hughes', 26, 'ahughes0@discuz.net', 'basketball, tennis'),
                                                                               (2, 'Delmore', 'Schlagh', 50, 'dschlagh1@godaddy.com', 'tennis, tennis'),
                                                                               (3, 'Miles', 'Robken', 54, 'mrobken2@wikispaces.com', 'basketball, golf'),
                                                                               (4, 'Oona', 'Lattey', 16, 'olattey3@wisc.edu', 'swimming, tennis'),
                                                                               (5, 'Marcelle', 'Paulsson', 22, 'mpaulsson4@topsy.com', 'tennis, swimming'),
                                                                               (6, 'Neal', 'Keyhoe', 87, 'nkeyhoe5@cargocollective.com', 'football, tennis'),
                                                                               (7, 'Feliza', 'Endricci', 10, 'fendricci6@census.gov', 'swimming, swimming'),
                                                                               (8, 'Humfrey', 'Oliphant', 40, 'holiphant7@weebly.com', 'swimming, tennis'),
                                                                               (9, 'Verina', 'Jose', 32, 'vjose8@mail.ru', 'basketball, golf'),
                                                                               (10, 'Orson', 'Pebworth', 56, 'opebworth9@sitemeter.com', 'football, golf'),
                                                                               (11, 'Aretha', 'Muslim', 69, 'amuslima@is.gd', 'tennis, football'),
                                                                               (12, 'Alford', 'Crebo', 38, 'acrebob@patch.com', 'football, golf'),
                                                                               (13, 'Dolph', 'Tampen', 81, 'dtampenc@google.com', 'golf, football'),
                                                                               (14, 'Crissy', 'Mc Gaughey', 57, 'cmcgaugheyd@flickr.com', 'swimming, football'),
                                                                               (15, 'Drucie', 'Alexsandrov', 83, 'dalexsandrove@netscape.com', 'football, basketball'),
                                                                               (16, 'Guillemette', 'Doole', 88, 'gdoolef@chicagotribune.com', 'golf, basketball'),
                                                                               (17, 'Jessica', 'Coldwell', 20, 'jcoldwellg@buzzfeed.com', 'swimming, basketball'),
                                                                               (18, 'Jory', 'Bilovsky', 28, 'jbilovskyh@sina.com.cn', 'football, basketball'),
                                                                               (19, 'Herschel', 'Berryman', 50, 'hberrymani@free.fr', 'basketball, tennis'),
                                                                               (20, 'Ingrim', 'Chaffen', 10, 'ichaffenj@ovh.net', 'basketball, golf');