PGDMP     $                    {           taller    14.10    14.10 5    )           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            *           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            +           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ,           1262    16394    taller    DATABASE     b   CREATE DATABASE taller WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE taller;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            -           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    32855    alumno    TABLE     �  CREATE TABLE public.alumno (
    alumno_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    edad integer,
    curso_id integer,
    genero_id integer,
    seccion_id integer,
    apellido character varying(255),
    nota_final numeric(5,2),
    comportamiento numeric(5,2),
    asistencia numeric(5,2),
    resultado character varying,
    CONSTRAINT alumno_asistencia_check CHECK (((asistencia >= (0)::numeric) AND (asistencia <= (100)::numeric))),
    CONSTRAINT alumno_comportamiento_check CHECK (((comportamiento >= (0)::numeric) AND (comportamiento <= (100)::numeric))),
    CONSTRAINT alumno_nota_final_check CHECK (((nota_final >= (0)::numeric) AND (nota_final <= (100)::numeric)))
);
    DROP TABLE public.alumno;
       public         heap    postgres    false    3            �            1259    32854    alumno_alumno_id_seq    SEQUENCE     �   CREATE SEQUENCE public.alumno_alumno_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.alumno_alumno_id_seq;
       public          postgres    false    216    3            .           0    0    alumno_alumno_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.alumno_alumno_id_seq OWNED BY public.alumno.alumno_id;
          public          postgres    false    215            �            1259    32836    curso    TABLE     n   CREATE TABLE public.curso (
    curso_id integer NOT NULL,
    descripcion character varying(255) NOT NULL
);
    DROP TABLE public.curso;
       public         heap    postgres    false    3            �            1259    32835    curso_curso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.curso_curso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.curso_curso_id_seq;
       public          postgres    false    3    214            /           0    0    curso_curso_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.curso_curso_id_seq OWNED BY public.curso.curso_id;
          public          postgres    false    213            �            1259    32867    genero    TABLE     i   CREATE TABLE public.genero (
    id integer NOT NULL,
    descripcion character varying(255) NOT NULL
);
    DROP TABLE public.genero;
       public         heap    postgres    false    3            �            1259    32866    genero_id_seq    SEQUENCE     �   CREATE SEQUENCE public.genero_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.genero_id_seq;
       public          postgres    false    218    3            0           0    0    genero_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.genero_id_seq OWNED BY public.genero.id;
          public          postgres    false    217            �            1259    24638    roles    TABLE     a   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false    3            �            1259    24641    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    209    3            1           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    210            �            1259    32881    seccion    TABLE     j   CREATE TABLE public.seccion (
    id integer NOT NULL,
    descripcion character varying(255) NOT NULL
);
    DROP TABLE public.seccion;
       public         heap    postgres    false    3            �            1259    32880    seccion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.seccion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.seccion_id_seq;
       public          postgres    false    3    220            2           0    0    seccion_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.seccion_id_seq OWNED BY public.seccion.id;
          public          postgres    false    219            �            1259    24642    usuario    TABLE     �   CREATE TABLE public.usuario (
    userid integer NOT NULL,
    nombre character varying(50) NOT NULL,
    correoelectronico character varying(100) NOT NULL,
    "contraseña" character varying(255) NOT NULL,
    role_id integer
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    3            �            1259    24645    usuario_userid_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.usuario_userid_seq;
       public          postgres    false    211    3            3           0    0    usuario_userid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.usuario_userid_seq OWNED BY public.usuario.userid;
          public          postgres    false    212            x           2604    32858    alumno alumno_id    DEFAULT     t   ALTER TABLE ONLY public.alumno ALTER COLUMN alumno_id SET DEFAULT nextval('public.alumno_alumno_id_seq'::regclass);
 ?   ALTER TABLE public.alumno ALTER COLUMN alumno_id DROP DEFAULT;
       public          postgres    false    215    216    216            w           2604    32839    curso curso_id    DEFAULT     p   ALTER TABLE ONLY public.curso ALTER COLUMN curso_id SET DEFAULT nextval('public.curso_curso_id_seq'::regclass);
 =   ALTER TABLE public.curso ALTER COLUMN curso_id DROP DEFAULT;
       public          postgres    false    213    214    214            |           2604    32870 	   genero id    DEFAULT     f   ALTER TABLE ONLY public.genero ALTER COLUMN id SET DEFAULT nextval('public.genero_id_seq'::regclass);
 8   ALTER TABLE public.genero ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            u           2604    24646    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            }           2604    32884 
   seccion id    DEFAULT     h   ALTER TABLE ONLY public.seccion ALTER COLUMN id SET DEFAULT nextval('public.seccion_id_seq'::regclass);
 9   ALTER TABLE public.seccion ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            v           2604    24647    usuario userid    DEFAULT     p   ALTER TABLE ONLY public.usuario ALTER COLUMN userid SET DEFAULT nextval('public.usuario_userid_seq'::regclass);
 =   ALTER TABLE public.usuario ALTER COLUMN userid DROP DEFAULT;
       public          postgres    false    212    211            "          0    32855    alumno 
   TABLE DATA                 public          postgres    false    216   58                  0    32836    curso 
   TABLE DATA                 public          postgres    false    214   �8       $          0    32867    genero 
   TABLE DATA                 public          postgres    false    218   69                 0    24638    roles 
   TABLE DATA                 public          postgres    false    209   �9       &          0    32881    seccion 
   TABLE DATA                 public          postgres    false    220   �9                 0    24642    usuario 
   TABLE DATA                 public          postgres    false    211   @:       4           0    0    alumno_alumno_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.alumno_alumno_id_seq', 11, true);
          public          postgres    false    215            5           0    0    curso_curso_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.curso_curso_id_seq', 1, false);
          public          postgres    false    213            6           0    0    genero_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.genero_id_seq', 1, false);
          public          postgres    false    217            7           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 2, true);
          public          postgres    false    210            8           0    0    seccion_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.seccion_id_seq', 1, false);
          public          postgres    false    219            9           0    0    usuario_userid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.usuario_userid_seq', 42, true);
          public          postgres    false    212            �           2606    32860    alumno alumno_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT alumno_pkey PRIMARY KEY (alumno_id);
 <   ALTER TABLE ONLY public.alumno DROP CONSTRAINT alumno_pkey;
       public            postgres    false    216            �           2606    32841    curso curso_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (curso_id);
 :   ALTER TABLE ONLY public.curso DROP CONSTRAINT curso_pkey;
       public            postgres    false    214            �           2606    32872    genero genero_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.genero DROP CONSTRAINT genero_pkey;
       public            postgres    false    218                       2606    24649    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    209            �           2606    32886    seccion seccion_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.seccion
    ADD CONSTRAINT seccion_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.seccion DROP CONSTRAINT seccion_pkey;
       public            postgres    false    220            �           2606    24651 %   usuario usuario_correoelectronico_key 
   CONSTRAINT     m   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correoelectronico_key UNIQUE (correoelectronico);
 O   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_correoelectronico_key;
       public            postgres    false    211            �           2606    24653    usuario usuario_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (userid);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    211            �           2606    32861    alumno alumno_curso_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT alumno_curso_id_fkey FOREIGN KEY (curso_id) REFERENCES public.curso(curso_id);
 E   ALTER TABLE ONLY public.alumno DROP CONSTRAINT alumno_curso_id_fkey;
       public          postgres    false    3205    214    216            �           2606    32887    alumno fk_genero    FK CONSTRAINT     r   ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT fk_genero FOREIGN KEY (genero_id) REFERENCES public.genero(id);
 :   ALTER TABLE ONLY public.alumno DROP CONSTRAINT fk_genero;
       public          postgres    false    3209    218    216            �           2606    32902    alumno fk_seccion    FK CONSTRAINT     u   ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT fk_seccion FOREIGN KEY (seccion_id) REFERENCES public.seccion(id);
 ;   ALTER TABLE ONLY public.alumno DROP CONSTRAINT fk_seccion;
       public          postgres    false    216    3211    220            �           2606    24654    usuario usuario_role_id_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
 F   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_role_id_fkey;
       public          postgres    false    209    211    3199            "   �   x���v
Q���W((M��L�K�)���Ws�	uV�0�QP�*���W�Q04bROI��L-��������\�M��X����2�XG����RKts��S�S(���^�A��� ���sa�	���D����<�u\\ ��O�          F   x���v
Q���W((M��L�K.-*�Ws�	uV�0�QP�M,I���DuMk.OBZ��Z�2��ʹ� ��      $   J   x���v
Q���W((M��L�KO�K-�Ws�	uV�0�QP�M,N.����W״��$���%-575��� ��         Q   x���v
Q���W((M��L�+��I-Vs�	uV�0�QPw�P״��$�����(?-�8��(F@)�E��%\\ /r*�      &   ?   x���v
Q���W((M��L�+NMN���Ss�	uV�0�QPwT״��$����	��� �8;         �  x���ɮ�P���)\����pP��F'dP�&�0�O�x��ͪ]��?���_*U��w�ldC䕛DV���l`����~Pį�P����;iQ4�
^��f�	�ˣ�
�W�x� ��Dz��q	�v�O�K����VU�K�s��fY�*������ ��U|���g���3�l��|�nnQ�F�	
c���OF�X��2� ���&�+������|5H����ŨG��m����Z�]*Z�O��R��,FZDR�Z�zM��d%�dbg�J��
�Y�(���b�{�FZB]�{����n�b�N��]ȹ{��v�K�b��M�5��ƨ�*aQ?��z����h`#��l��@�%K�K�
NB~�Ԕ��m�M��g8�����	�qgE���Y�z�8LZ(���>5^P{xP�ys�P�K��X���4��I�'��*�`�?E�tS&�(^z<�N-��}���[ɞ�u�i��|L��z��rx:o� �~��_d��Qm��	-��%}��M(�G�|��an���6�JwQ����`�����rO@�(/(XF���Q�cz�RFt����ˀ�(��3�H3���8��n�c7�~ӽ^4]��6�yw�*��I�=T�dz�V��|��b���HE����'&r�8�S���G�=B����}�ü�$�Xc!� ���f��N]����c�඘�6ƹc�����|<�o     