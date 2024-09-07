--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Homebrew)
-- Dumped by pg_dump version 14.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.test_results DROP CONSTRAINT test_results_question_answer_id_fkey;
ALTER TABLE ONLY public.scores DROP CONSTRAINT scores_user_id_fkey;
ALTER TABLE ONLY public.scores DROP CONSTRAINT scores_test_result_id_fkey;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_name_key;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
ALTER TABLE ONLY public.test_results DROP CONSTRAINT test_results_pkey;
ALTER TABLE ONLY public.scores DROP CONSTRAINT scores_pkey;
ALTER TABLE ONLY public.questions_answers DROP CONSTRAINT questions_answers_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.test_results ALTER COLUMN test_result_id DROP DEFAULT;
ALTER TABLE public.scores ALTER COLUMN score_id DROP DEFAULT;
ALTER TABLE public.questions_answers ALTER COLUMN question_answer_id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.test_results_test_result_id_seq;
DROP TABLE public.test_results;
DROP SEQUENCE public.scores_score_id_seq;
DROP TABLE public.scores;
DROP SEQUENCE public.questions_answers_question_answer_id_seq;
DROP TABLE public.questions_answers;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: questions_answers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questions_answers (
    question_answer_id integer NOT NULL,
    question character varying,
    answer character varying,
    options character varying[]
);


--
-- Name: questions_answers_question_answer_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.questions_answers_question_answer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: questions_answers_question_answer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.questions_answers_question_answer_id_seq OWNED BY public.questions_answers.question_answer_id;


--
-- Name: scores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.scores (
    score_id integer NOT NULL,
    user_score integer,
    user_id integer,
    test_result_id integer
);


--
-- Name: scores_score_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.scores_score_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: scores_score_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.scores_score_id_seq OWNED BY public.scores.score_id;


--
-- Name: test_results; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test_results (
    test_result_id integer NOT NULL,
    is_correct boolean,
    question_answer_id integer
);


--
-- Name: test_results_test_result_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.test_results_test_result_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: test_results_test_result_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.test_results_test_result_id_seq OWNED BY public.test_results.test_result_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    user_name character varying,
    email character varying,
    password character varying
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: questions_answers question_answer_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions_answers ALTER COLUMN question_answer_id SET DEFAULT nextval('public.questions_answers_question_answer_id_seq'::regclass);


--
-- Name: scores score_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.scores ALTER COLUMN score_id SET DEFAULT nextval('public.scores_score_id_seq'::regclass);


--
-- Name: test_results test_result_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_results ALTER COLUMN test_result_id SET DEFAULT nextval('public.test_results_test_result_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: questions_answers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.questions_answers (question_answer_id, question, answer, options) FROM stdin;
\.


--
-- Data for Name: scores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.scores (score_id, user_score, user_id, test_result_id) FROM stdin;
1	4	15	\N
2	5	15	\N
3	3	15	\N
4	5	15	\N
5	6	15	\N
6	5	15	\N
7	0	15	\N
8	0	15	\N
9	3	15	\N
10	0	15	\N
11	3	15	\N
12	0	15	\N
13	8	15	\N
14	10	15	\N
15	2	15	\N
16	4	20	\N
17	1	20	\N
18	2	15	\N
19	0	15	\N
20	2	15	\N
21	3	15	\N
22	2	15	\N
23	9	15	\N
24	2	15	\N
25	3	15	\N
26	2	15	\N
27	0	15	\N
28	0	15	\N
29	2	15	\N
30	0	15	\N
31	0	15	\N
32	0	15	\N
33	3	15	\N
34	2	15	\N
35	0	15	\N
36	2	15	\N
37	2	15	\N
38	1	15	\N
39	1	15	\N
\.


--
-- Data for Name: test_results; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.test_results (test_result_id, is_correct, question_answer_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, user_name, email, password) FROM stdin;
1	rendon@gmail.com	test	pbkdf2:sha256:260000$CaTj0RwjVvSZo6CO$9dabd764f128a36808b3f63fe076a1d80744778cee233d86a51564e963c6c762
2	rendonir@gmail.com	Test3	pbkdf2:sha256:260000$bhkymyFL7XSURQlQ$44da18ba86e91045269c0307768066e9c2b5d258aba13122d66f30abc618ad65
3	yibar@gmail.com	test5	pbkdf2:sha256:260000$EfEnkGx8iQukj8Sk$d546b52439e61eaf1b8cb9c1d9e1f388ba7ccdecccfc305cf9b8c0ea2023fbe5
7	ivan@aol.com	Test6	iivan
8	Yanet	yanet@aol.com	Test7
9	yanet	yanet27@gmail.com	Test10
10	Ivan	yanet28@gmail.com	Test11
15	Ivan02	ivan02@gmail.com	Test02
19	Yanet02	yanet02@gmail.com	Test02
20	yiba	yibazz@gmail.com	yes
\.


--
-- Name: questions_answers_question_answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.questions_answers_question_answer_id_seq', 1, false);


--
-- Name: scores_score_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.scores_score_id_seq', 39, true);


--
-- Name: test_results_test_result_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.test_results_test_result_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: questions_answers questions_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions_answers
    ADD CONSTRAINT questions_answers_pkey PRIMARY KEY (question_answer_id);


--
-- Name: scores scores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_pkey PRIMARY KEY (score_id);


--
-- Name: test_results test_results_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_results
    ADD CONSTRAINT test_results_pkey PRIMARY KEY (test_result_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_user_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);


--
-- Name: scores scores_test_result_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_test_result_id_fkey FOREIGN KEY (test_result_id) REFERENCES public.test_results(test_result_id);


--
-- Name: scores scores_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: test_results test_results_question_answer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_results
    ADD CONSTRAINT test_results_question_answer_id_fkey FOREIGN KEY (question_answer_id) REFERENCES public.questions_answers(question_answer_id);


--
-- PostgreSQL database dump complete
--

