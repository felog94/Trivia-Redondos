// 👑 TRIVIADOR RICOTERO - VERSIÓN 1 (CLÁSICA) 👑

// 1. LISTA COMPLETA DE CANCIONES
const songs = [
  { title: "Barbazul Versus el Amor Letal", url: "https://www.dropbox.com/scl/fi/l82ulgxmd8sajvw5mosun/01-Barbazul-Versus-el-Amor-Letal.mp3?rlkey=wxn6jkrlbzjmvf2esijyff991&st=xvh9j1rj&raw=1" },
  { title: "El Templo de Momo", url: "https://www.dropbox.com/scl/fi/g96vexgaze7zffaxp7wd6/01-El-Templo-de-Momo.mp3?rlkey=q7zzzltucdvjiyryn9ekimvx3&st=6khygev5&raw=1" },
  { title: "Fuegos de Octubre", url: "https://www.dropbox.com/scl/fi/vjpoqiyn3okksis0cikjo/01-Fuegos-de-Octubre.mp3?rlkey=jh6i229ov73x5ss773qbi0hid&st=0yo7x0f5&raw=1" },
  { title: "Héroe del Whisky", url: "https://www.dropbox.com/scl/fi/llm5u3stis0zrygvolb33/01-H-roe-del-Whisky.mp3?rlkey=sng7exvqa1w7ieopw0gi823bm&st=nktgmu8g&raw=1" },
  { title: "Invocación", url: "https://www.dropbox.com/scl/fi/15m2k8zl0t0q6golse6ov/01-Invocaci-n.mp3?rlkey=i8sk93s2tgrmfo6fpsb7kmik7&st=0hzxddo0&raw=1" },
  { title: "Las Increíbles Andanzas del Capitán Buscapina", url: "https://www.dropbox.com/scl/fi/xy4tku660lwrjf2yighnb/01-Las-Incre-bles-Andanzas-del-Capit-n-Buscapina-en-Cybersiberia.mp3?rlkey=f9i88okhg6zwemkxp2wd3q3qq&st=csyexep3&raw=1" },
  { title: "Luzbelito y las Sirenas", url: "https://www.dropbox.com/scl/fi/1mphf1l2d9dzch53ni7bq/01-Luzbelito-y-las-Sirenas.mp3?rlkey=8jrs4r8qk7wl9qelmc0838yn3&st=z1anwh15&raw=1" },
  { title: "Masacre en el Puticlub", url: "https://www.dropbox.com/scl/fi/rporujrutvu3wk7vx7z45/01-Masacre-en-el-Puticlub.mp3?rlkey=rl38i9nc1ec06z42o182k8far&st=d5uufisk&raw=1" },
  { title: "Toxi Taxi", url: "https://www.dropbox.com/scl/fi/fn5wc4jp7r4n0fwdj60jo/01-Toxi-Taxi.mp3?rlkey=htg1zdyh3seaskfeyruwsz55s&st=ugqbik04&raw=1" },
  { title: "Yo Caníbal", url: "https://www.dropbox.com/scl/fi/ucg5og8d81ghhfp3jkawh/01-Yo-Can-bal.mp3?rlkey=g68xen3a5aelorfnqpsd9jmh1&st=lvpee4zb&raw=1" },
  { title: "Cruz Diablo", url: "https://www.dropbox.com/scl/fi/yehnr8e4u0w8y30omdliw/02-Cruz-Diablo.mp3?rlkey=eurgnnk171n93dt1eitindbze&st=poxzne9h&raw=1" },
  { title: "Estás Frito Angelito", url: "https://www.dropbox.com/scl/fi/sif55q8nvai58f1vend1o/02-Est-s-Frito-Angelito.mp3?rlkey=8ibc6r3apo1lbc10m83yqlyyz&st=od3oksov&raw=1" },
  { title: "Fusilados por la Cruz Roja", url: "https://www.dropbox.com/scl/fi/w6imvbd3zhntj9jhcofku/02-Fusilados-por-la-Cruz-Roja.mp3?rlkey=bthm35ml4kyuy404ht5jjzptz&st=zk7c54z7&raw=1" },
  { title: "La Bestia Pop", url: "https://www.dropbox.com/scl/fi/uv34mzf1g6bcvutd387v9/02-La-Bestia-Pop.mp3?rlkey=vd6ac969yzw6kev4f438rmqng&st=fpphluak&raw=1" },
  { title: "Ladrón de Mi Cerebro", url: "https://www.dropbox.com/scl/fi/g70lsrbep4j007o83wrqf/02-Ladr-n-de-Mi-Cerebro.mp3?rlkey=8mh3evx9v1rrljirpuxhuhk7r&st=5fgm6696&raw=1" },
  { title: "Morta Punto Com", url: "https://www.dropbox.com/scl/fi/vnk4naiymdfsju1ky2fnh/02-Morta-Punto-Com.mp3?rlkey=9d06ezc8qf1p7pn8xdjwho2fa&st=7ygwm9t8&raw=1" },
  { title: "Noticias de Ayer", url: "https://www.dropbox.com/scl/fi/4gq8kt1cj4q9f8pj67sr8/02-Noticias-de-Ayer.mp3?rlkey=dt0nb2weka73rrqhlmm6mxs2w&st=uxt94abz&raw=1" },
  { title: "Preso en Mi Ciudad", url: "https://www.dropbox.com/scl/fi/togp2kbyy9o8az3f1k7mx/02-Preso-en-Mi-Ciudad.mp3?rlkey=f9uwzeb3gqa2fu616ux8eqqz3&st=5mbze5c4&raw=1" },
  { title: "Rock para el Negro Atila", url: "https://www.dropbox.com/scl/fi/3c1tlbt6pili9ef96vlr6/02-Rock-para-el-Negro-Atila.mp3?rlkey=1itvc6i6080ndn8oglesx0wnd&st=xmi95qoq&raw=1" },
  { title: "Rock para los Dientes", url: "https://www.dropbox.com/scl/fi/9emipawpau8qc1duakibz/02-Rock-para-los-Dientes.mp3?rlkey=1tbqtewq9qkohqz9kyk8vd9g8&st=u49nrbq6&raw=1" },
  { title: "Es Hora de Levantarse Querido", url: "https://www.dropbox.com/scl/fi/cg28yu3x4wkw3rvmupzev/03-Es-Hora-de-Levantarse-Querido-Dormiste-Bien_.mp3?rlkey=vyq0wh9crc7dm59gjp1m1txwz&st=g1p7llj6&raw=1" },
  { title: "Aquella Solitaria Vaca Cubana", url: "https://www.dropbox.com/scl/fi/z5vfp463lbiwlnudh2r3q/03-Aquella-Solitaria-Vaca-Cubana.mp3?rlkey=gqff9kix0j90p8dp3d6g24t2q&st=t4rkl0bh&raw=1" },
  { title: "El Árbol del Gran Bonete", url: "https://www.dropbox.com/scl/fi/b6t0vf66bgk6eqb394jpe/03-El-rbol-del-Gran-Bonete.mp3?rlkey=bbjjrn0gjbecui56uefx6zhbn&st=svfdr3r0&raw=1" },
  { title: "Ella Baila Con Todos", url: "https://www.dropbox.com/scl/fi/sab004yd0yu4keobvw3ll/03-Ella-Baila-Con-Todos.mp3?rlkey=2szovrqq81kde0o84ms74wn6q&st=ni16dtur&raw=1" },
  { title: "La Murga de los Renegados", url: "https://www.dropbox.com/scl/fi/7hq2kaju0oqgcz4qay46i/03-La-Murga-de-los-Renegados.mp3?rlkey=m9zb31b2z69g0f0gbgr15qb3x&st=1spn3rps&raw=1" },
  { title: "La Parabellum del Buen Psicópata", url: "https://www.dropbox.com/scl/fi/pcrmjdh9uzd7cjusc09zh/03-La-Parabellum-del-Buen-Psic-pata.mp3?rlkey=2xxxbbbvsliysgk15hx58msf0&st=j42dl02v&raw=1" },
  { title: "Música para Pastillas", url: "https://www.dropbox.com/scl/fi/g6757dsbfiimzf4tx03rd/03-M-sica-para-Pastillas.mp3?rlkey=8mo5hagok618ma0xvtoyyde9q&st=xev5l19d&raw=1" },
  { title: "Roto y Mal Parado", url: "https://www.dropbox.com/scl/fi/52h0kzmuejlxn7068hka7/03-Roto-y-Mal-Parado.mp3?rlkey=rq816qqlnt789uhao170r3kqc&st=nzgvn4ii&raw=1" },
  { title: "Sorpresa de Shangai", url: "https://www.dropbox.com/scl/fi/jpfcrfllxd2zk22ykeerf/03-Sorpresa-de-Shangai.mp3?rlkey=sft0qqxpjquhmme77j0fz1a36&st=t33zakt7&raw=1" },
  { title: "Un Poco de Amor Francés", url: "https://www.dropbox.com/scl/fi/w5prbgjhz1r265gd4bp7r/03-Un-Poco-de-Amor-Franc-s.mp3?rlkey=2rai1rwvojo6rjocv2w2sp7rb&st=8zmw3t9j&raw=1" },
  { title: "Dr. Saturno", url: "https://www.dropbox.com/scl/fi/y9r86gjodbzp2ibx4kzy8/04-Dr.-Saturno.mp3?rlkey=slt482zqejw0j97g5rbp5wxid&st=qxmgiff7&raw=1" },
  { title: "Fanfarria del Cabrío", url: "https://www.dropbox.com/scl/fi/l0e5n71gvyr5h732r981c/04-Fanfarria-del-Cabr-o.mp3?rlkey=kv6w1qyii0dlzr43c7xdcr29q&st=d9ohpnjp&raw=1" },
  { title: "Gualicho", url: "https://www.dropbox.com/scl/fi/ew240wl8lkk26qo8h0gx0/04-Gualicho.mp3?rlkey=et0qwubxkjgm34fok5b36ybhk&st=tx8l54jc&raw=1" },
  { title: "Mi Perro Dinamita", url: "https://www.dropbox.com/scl/fi/enltv8ww3bb1fw5mkagp8/04-Mi-Perro-Dinamita.mp3?rlkey=bsulaakus939vr2xttyjndoa3&st=vnwgondt&raw=1" },
  { title: "Perdiendo el Tiempo", url: "https://www.dropbox.com/scl/fi/niqcqyjlb1niwutyojghe/04-Perdiendo-el-Tiempo.mp3?rlkey=9t9a71iy1sg69ctvk8spqwqb6&st=bhpoh0dz&raw=1" },
  { title: "Pierre El Vitricida", url: "https://www.dropbox.com/scl/fi/ude8g358r0hoi2dernnf8/04-Pierre-El-Vitricida.mp3?rlkey=8tj5gqbjz65pupwebpy2ez0yu&st=3mw060ny&raw=1" },
  { title: "Semen Up", url: "https://www.dropbox.com/scl/fi/ndtiz2owlwa4qi1d8l6rq/04-Semen-Up.mp3?rlkey=orasa28gndjnkrn5rixnanjdj&st=e8pep43t&raw=1" },
  { title: "Shopping Disco Zen", url: "https://www.dropbox.com/scl/fi/uuyhb8lcw7ymujyhuwehz/04-Shopping-Disco-Zen.mp3?rlkey=ygq71vmg2oh2pm2hrh01wul2k&st=kpfh3mli&raw=1" },
  { title: "Todo Preso Es Político", url: "https://www.dropbox.com/scl/fi/jwscj2uvcjbwxd89zm0m9/04-Todo-Preso-Es-Pol-tico.mp3?rlkey=xy1rl82jts2s379mc1r6pgowm&st=g9qp309x&raw=1" },
  { title: "Un Pacman en el Savoy", url: "https://www.dropbox.com/scl/fi/f013s1ov08nnmjjxv7tm7/04-Un-Pacman-en-el-Savoy.mp3?rlkey=ywrf0mh64r5fvmg5rz05hmnzf&st=72hjnnh6&raw=1" },
  { title: "Blues de la Artillería", url: "https://www.dropbox.com/scl/fi/h96havkzymq2mr6lup0ac/05-Blues-de-la-Artiller-a.mp3?rlkey=0reqw8jefjv4pmmkbdqu5pm6z&st=zpwddd48&raw=1" },
  { title: "Caña Seca y un Membrillo", url: "https://www.dropbox.com/scl/fi/5rf1bntngt87fwg10tlvw/05-Ca-a-Seca-y-un-Membrillo.mp3?rlkey=n34ita7n77y2he0cwtytn1k5q&st=y5k932qz&raw=1" },
  { title: "Divina TV. Führer", url: "https://www.dropbox.com/scl/fi/x1w8955r0il7uo6x93cnz/05-Divina-TV.-F-hrer.mp3?rlkey=48hg6p78mgcgej3knjtwvwqvo&st=4j88hus2&raw=1" },
  { title: "La Murga de la Virgencita", url: "https://www.dropbox.com/scl/fi/jak8feq8eca5d586p3beu/05-La-Murga-de-la-Virgencita.mp3?rlkey=p0cw2h0ynqw1pbh4tejlc32qa&st=krsmqo8k&raw=1" },
  { title: "Nadie Es Perfecto", url: "https://www.dropbox.com/scl/fi/vy90yf929cvy05v9k9hfu/05-Nadie-Es-Perfecto.mp3?rlkey=atdwxzpy7y9p259v18sqrkmol&st=r171ynlc&raw=1" },
  { title: "Nuotatori Professionisti", url: "https://www.dropbox.com/scl/fi/jnhxuqc8dg0dzvelohfm8/05-Nuotatori-Professionisti.mp3?rlkey=lwj4cqb91s9lpnb7qwfq2ctx9&st=btjtz0pp&raw=1" },
  { title: "Pogo", url: "https://www.dropbox.com/scl/fi/p25zk5uhtnpq0sf4d3lxd/05-Pogo.mp3?rlkey=zyby1grf41ppt7uqi3tvf5m2k&st=8v8lxfpa&raw=1" },
  { title: "Un Ángel para Tu Soledad", url: "https://www.dropbox.com/scl/fi/2wo1k49ui4yr5np217a57/05-Un-ngel-para-Tu-Soledad.mp3?rlkey=ra6g5sf0rd8ac0etydlt50b7p&st=vqodugnb&raw=1" },
  { title: "Unos Pocos Peligros Sensatos", url: "https://www.dropbox.com/scl/fi/aohbokqj76ljz1td2vtf9/05-Unos-Pocos-Peligros-Sensatos.mp3?rlkey=ig9rursy1hc4bxzpxk92zqvtw&st=n00hfe35&raw=1" },
  { title: "Vencedores Vencidos", url: "https://www.dropbox.com/scl/fi/w3bk3shdhf9wj9dop0isa/05-Vencedores-Vencidos.mp3?rlkey=k710nou8n5qroj648pfz6jjcy&st=kziwuez3&raw=1" },
  { title: "Alien Duce", url: "https://www.dropbox.com/scl/fi/5ub4jldmqn7h1dh69bvfs/06-Alien-Duce.mp3?rlkey=dlkelqrg4y89bixkvmcrao90m&st=yaikeej2&raw=1" },
  { title: "Blues de la Libertad", url: "https://www.dropbox.com/scl/fi/zgw45vxxohmgd2qnni2ks/06-Blues-de-la-Libertad.mp3?rlkey=omujusx0zksrxprk64np29e7m&st=vexnq6mt&raw=1" },
  { title: "Buenas Noticias", url: "https://www.dropbox.com/scl/fi/bluffg5st44wjmvmy1oog/06-Buenas-Noticias.mp3?rlkey=3idr0emo1g15lw66iethkz4pt&st=hghda83k&raw=1" },
  { title: "Esa Estrella Era Mi Lujo", url: "https://www.dropbox.com/scl/fi/lkydm5tadc7vhklexyukw/06-Esa-Estrella-Era-Mi-Lujo.mp3?rlkey=5xj651y02fictds3r1tgxtnjg&st=dw45wefp&raw=1" },
  { title: "Motor Psico", url: "https://www.dropbox.com/scl/fi/azvtqjn9w55udvh3xlt6p/06-Motor-Psico.mp3?rlkey=tx06k7ngvl0yy4v3c2bvlhr8j&st=7l13ju3n&raw=1" },
  { title: "Pool Averna y Papusa", url: "https://www.dropbox.com/scl/fi/4v6drcq7zzdfbvvx0x7bs/06-Pool-Averna-y-Papusa.mp3?rlkey=5a5j2nqsjm07emkx0xv655k1m&st=hjqam4vc&raw=1" },
  { title: "Soga de Cañón", url: "https://www.dropbox.com/scl/fi/06yhow81xb2aqk2a74hzo/06-Soga-de-Ca-n.mp3?rlkey=lxovpsr4gva7sv76zu4tuiwpv&st=u4xb0i5q&raw=1" },
  { title: "Tarea Fina", url: "https://www.dropbox.com/scl/fi/vwsaobm88x5cp67jbfjum/06-Tarea-Fina.mp3?rlkey=f9n33czezbnj26x5fryiutqiq&st=bvk4vrir&raw=1" },
  { title: "Vamos las Bandas", url: "https://www.dropbox.com/scl/fi/zn36ihcqghhlfyho5wa57/06-Vamos-las-Bandas.mp3?rlkey=f0w1i33btxxho50gv0c6g3vqk&st=16ojaiad&raw=1" },
  { title: "Yo No Me Caí del Cielo", url: "https://www.dropbox.com/scl/fi/2v5iwt529zgw5opfbj7mz/06-Yo-No-Me-Ca-del-Cielo.mp3?rlkey=i87ouk4ffdknuu7gc683vct8e&st=leb0xl5c&raw=1" },
  { title: "El Pibe de los Astilleros", url: "https://www.dropbox.com/scl/fi/cg6q1w0ycaw0w09ipfitv/07-El-Pibe-de-los-Astilleros.mp3?rlkey=asx5352lz5irzwm5oldfj1jcd&st=lbcccztb&raw=1" },
  { title: "Ella Debe Estar Tan Linda", url: "https://www.dropbox.com/scl/fi/8zwlneavd3eldp4fmjcxd/07-Ella-Debe-Estar-Tan-Linda.mp3?rlkey=h3boggv5f49yvq0m6s72k91an&st=6h0e97ku&raw=1" },
  { title: "Jijiji", url: "https://www.dropbox.com/scl/fi/ydpqlags318rd5andnaj2/07-Ji-Ji-Ji.mp3?rlkey=3ilg0uvmtwx09sn33ljylr3mf&st=ri2qrvrp&raw=1" },
  { title: "La Dicha No Es una Cosa Alegre", url: "https://www.dropbox.com/scl/fi/ghbmwgzznoifp88giqd7g/07-La-Dicha-No-Es-una-Cosa-Alegre.mp3?rlkey=24ie78mqz8dh07jo5o2j7vua0&st=yve8748v&raw=1" },
  { title: "La Pequeña Novia del Carioca", url: "https://www.dropbox.com/scl/fi/f69ykbz13819cire5sa97/07-La-Peque-a-Novia-del-Carioca.mp3?rlkey=4z24a9hk1linjrlvrjjrhgu05&st=5ar4vcaa&raw=1" },
  { title: "Lavi Rap", url: "https://www.dropbox.com/scl/fi/nipo7227ahl7913g8ek7z/07-Lavi-Rap.mp3?rlkey=8hf0pk9qipsqn3ohmgobwhicq&st=kols4m4q&raw=1" },
  { title: "Maldición Va a Ser un Día Hermoso", url: "https://www.dropbox.com/scl/fi/7t4goypd1eusyeap12bgv/07-Maldici-n-Va-a-Ser-un-D-a-Hermoso.mp3?rlkey=gse0evfnt5vxvdcooywfqt0t6&st=wpdpv390&raw=1" },
  { title: "Murga Purga", url: "https://www.dropbox.com/scl/fi/ckfldlc3ib2sxcp5l8ba7/07-Murga-Purga.mp3?rlkey=ibvu1xq5g8xoc6xhm4x0delol&st=cziz9v6d&raw=1" },
  { title: "Susanita", url: "https://www.dropbox.com/scl/fi/x6ps1ucxdgbbwepxdt119/07-Susanita.mp3?rlkey=ildmbnqeldudlyg6hhx9podm7&st=insikor5&raw=1" },
  { title: "Te Voy a Atornillar", url: "https://www.dropbox.com/scl/fi/kfjzf05hcbhz9oeb9ynh6/07-Te-Voy-a-Atornillar.mp3?rlkey=w5dbz7ifgtiepkouh1hngs5kr&st=2dhme6td&raw=1" },
  { title: "Canción para Naufragios", url: "https://www.dropbox.com/scl/fi/vm7exejeceltcvngxqewp/08-Canci-n-para-Naufragios.mp3?rlkey=6idyo53sn37arrls5446e70s2&st=pyhbto1d&raw=1" },
  { title: "Capricho Magyar", url: "https://www.dropbox.com/scl/fi/n5m8wtcm9e2v6ofv38mwe/08-Capricho-Magyar.mp3?rlkey=unx0i1vdocubidm0yr05ugt8s&st=84hoz6mg&raw=1" },
  { title: "Drogocop", url: "https://www.dropbox.com/scl/fi/gp39dbv39oyl79mke7ttx/08-Drogocop.mp3?rlkey=31kb97qgvsdbh444chdzft7n3&st=q2dg4bgs&raw=1" },
  { title: "El Arte del Buen Comer", url: "https://www.dropbox.com/scl/fi/7bv3mbj30s3ouv87p8icv/08-El-Arte-del-Buen-Comer.mp3?rlkey=qnujhvp6j6kv9j953r3423fo6&st=cdjlczw9&raw=1" },
  { title: "Me Matan Limón", url: "https://www.dropbox.com/scl/fi/bc4j45kmkfh91p7vf02yo/08-Me-Matan-Lim-n.mp3?rlkey=qu6sinlohyvmfa66hjpktps9m&st=vu9ybqbq&raw=1" },
  { title: "Nueva Roma", url: "https://www.dropbox.com/scl/fi/p14vl3kmwm0j76u1ldbgp/08-Nueva-Roma.mp3?rlkey=f7vne7b742jum0szefi1irkw3&st=5k95nr70&raw=1" },
  { title: "Ropa Sucia", url: "https://www.dropbox.com/scl/fi/9jah1guaa4ekpk3ak99g6/08-Ropa-Sucia.mp3?rlkey=th92k6zv5921ptlnot4ymnkit&st=zyzsdsqu&raw=1" },
  { title: "Sheriff", url: "https://www.dropbox.com/scl/fi/m7m5uc1qqozvk8uveujkr/08-Sheriff.mp3?rlkey=kkcw6jjkpjed5priu3846mkpc&st=lccp3u8d&raw=1" },
  { title: "Superlógico", url: "https://www.dropbox.com/scl/fi/991lljzkmestt13q6vi3x/08-Superl-gico.mp3?rlkey=i91w1eomo5sj4uhuzki5kufbx&st=dnf4jd30&raw=1" },
  { title: "Todo un Palo", url: "https://www.dropbox.com/scl/fi/o7v3tz8cq0rchjhwpbdr2/08-Todo-un-Palo.mp3?rlkey=ifctmiz8y2ijnco03a521rqt7&st=rtbeb4dz&raw=1" },
  { title: "Lobo Estás", url: "https://www.dropbox.com/scl/fi/siqdi15h4nljunpw4olc5/09-Lobo-Est-s_.mp3?rlkey=w2xf79zoxcu4oaqtu63pwmqj6&st=g2p7k25f&raw=1" },
  { title: "Espejismo", url: "https://www.dropbox.com/scl/fi/i7bd1za5s7qsglcu740kd/09-Espejismo.mp3?rlkey=sclbv4ho7h7jc3gzwh1683gbg&st=cnbaipqd&raw=1" },
  { title: "Nuestro Amo Juega al Esclavo", url: "https://www.dropbox.com/scl/fi/13sy63g4vwdwq3mck8l1w/09-Nuestro-Amo-Juega-al-Esclavo.mp3?rlkey=q2xa2z11z20n0vuqkpccy827i&st=gugpwkf6&raw=1" },
  { title: "Ñam Fri Fruli Fali Fru", url: "https://www.dropbox.com/scl/fi/zuauungxs6c2qc0rjm3ue/09-am-Fri-Fruli-Fali-Fru.mp3?rlkey=m3fjordl2cgfn42g6lbtdtzpm&st=cyy92eg5&raw=1" },
  { title: "Pensando Como una Acelga", url: "https://www.dropbox.com/scl/fi/dz19u2h1hw6ps8y0co0yk/09-Pensando-Como-una-Acelga.mp3?rlkey=gn4pm3ehmze5bx38qmpraau2x&st=tag69k66&raw=1" },
  { title: "Rock Yugular", url: "https://www.dropbox.com/scl/fi/nhftgj9f7eikesfdcz5ix/09-Rock-Yugular.mp3?rlkey=pxy6ou1kluc741v6hvwdzv6mf&st=4r8oypve&raw=1" },
  { title: "Salando las Heridas", url: "https://www.dropbox.com/scl/fi/2e5na4xet4ezyun5llhsa/09-Salando-las-Heridas.mp3?rlkey=k10sqsfeeop9gillp7uc5xb5f&st=x3f24hav&raw=1" },
  { title: "Scaramanzia", url: "https://www.dropbox.com/scl/fi/t6dj4w8zn9d215csrlz3d/09-Scaramanzia.mp3?rlkey=mfa7ls9eo2coq2sc5g4697asi&st=js299lo8&raw=1" },
  { title: "Ya Nadie Va a Escuchar Tu Remera", url: "https://www.dropbox.com/scl/fi/kf0keo4o1cep873g4pnr3/09-Ya-Nadie-Va-a-Escuchar-Tu-Remera.mp3?rlkey=ktm0srad1gt4z0exbkf1x9ik0&st=0a72so5n&raw=1" },
  { title: "Botija Rapado", url: "https://www.dropbox.com/scl/fi/kk9irvy6zhuwj9pzllq7q/10-Botija-Rapado.mp3?rlkey=ho1ncn09931l1vv6jzbghq608&st=dbw3r0fr&raw=1" },
  { title: "El Infierno Está Encantador Esta Noche", url: "https://www.dropbox.com/scl/fi/9m0lkdnnbgcktapuocuq4/10-El-Infierno-Est-Encantador-Esta-Noche.mp3?rlkey=9hym3jr4dqwro6fvrnwxk6zkv&st=sqldg9or&raw=1" },
  { title: "Esto Es To To Todo Amigos", url: "https://www.dropbox.com/scl/fi/y7jeg9a24dm4bbktzinoq/10-Esto-Es-To-To-Todo-Amigos.mp3?rlkey=abhcfuf9r9pdcpslwsa3pimxl&st=0weqcns8&raw=1" },
  { title: "Gran Lady", url: "https://www.dropbox.com/scl/fi/hq9cvxbvpt7gf0y1z4iu4/10-Gran-Lady.mp3?rlkey=yuewx12yyrxnwhgufltax3xtv&st=ktc02zma&raw=1" },
  { title: "Mariposa Pontiac Rock del País", url: "https://www.dropbox.com/scl/fi/z5uj0vu6sqopzw6tlkzkh/10-Mariposa-Pontiac-Rock-del-Pa-s.mp3?rlkey=i3jvzl3s9pk3993xtaexe5df0&st=564s6pnu&raw=1" },
  { title: "Queso Ruso", url: "https://www.dropbox.com/scl/fi/tt5wwx08d0tv01t15yqls/10-Queso-Ruso.mp3?rlkey=mp3l9rabaigblpv51zsn187y6&st=xxzvb79z&raw=1" },
  { title: "Una Piba Con la Remera de Greenpeace", url: "https://www.dropbox.com/scl/fi/530nwtx84gserzw46123z/10-Una-Piba-Con-la-Remera-de-Greenpeace.mp3?rlkey=qc4tsiygvkc826gts1trcwz7r&st=70rebw7k&raw=1" },
  { title: "Criminal Mambo", url: "https://www.dropbox.com/scl/fi/rzs85oqzla7wnjobuhj45/11-Criminal-Mambo.mp3?rlkey=pgdjz9wnaatqvmkwc2sacwai5&st=2rm7m58i&raw=1" },
  { title: "Juguetes Perdidos", url: "https://www.dropbox.com/scl/fi/gxwdm4hggjocbklz1tm2q/11-Juguetes-Perdidos.mp3?rlkey=jhzywj2ylsh5gvpz7wsujq6rz&st=o34qjoie&raw=1" },
  { title: "La Hija del Fletero", url: "https://www.dropbox.com/scl/fi/yw7lsj9tleu1ye54jglep/11-La-Hija-del-Fletero.mp3?rlkey=4uijt3mjkt74vi20n7g3spiyu&st=cuf5ex3w&raw=1" },
  { title: "Rato Molhado", url: "https://www.dropbox.com/scl/fi/e2xixxugtl2hp7afv1t8j/11-Rato-Molhado.mp3?rlkey=w1hxo0ipvfvbuabmc1k0cv9nc&st=wieokugu&raw=1" },
  { title: "San Telmo", url: "https://www.dropbox.com/scl/fi/o5bz1ei8xfpa8w7wkpi1j/11-San-Telmo.mp3?rlkey=pz3ry8my8w2424roare6v2x34&st=ls5y65gr&raw=1" },
  { title: "El Lobo Caído", url: "https://www.dropbox.com/scl/fi/f00c2tog9lory07a1f6c4/12-El-Lobo-Ca-do.mp3?rlkey=nl06exxwgjevauyt6um7tvom1&st=5pd7gpgv&raw=1" },
  { title: "Etiqueta Negra", url: "https://www.dropbox.com/scl/fi/cocjmbmv3ft4jl1ahaf87/12-Etiqueta-Negra.mp3?rlkey=uwbsazukz43y6g2t6ipgcce28&st=hbc0tjdf&raw=1" }
];

// --- 2. LÓGICA DEL JUEGO (GAME LOGIC) ---
let playlist = [...songs];
let currentSong = null;
let audioPlayer = document.getElementById('audio-player');
let gameTimer = null;
let currentLimit = 5;
let scoreCorrect = 0;
let scoreIncorrect = 0;
let isPlaying = false;

const ui = {
  status: document.getElementById('status-text'),
  btnMain: document.getElementById('btn-main'),
  helpControls: document.getElementById('help-controls'),
  answerSection: document.getElementById('answer-section'),
  finalResult: document.getElementById('final-result'),
  songTitle: document.getElementById('song-title'),
  scoreCorrect: document.getElementById('score-correct'),
  scoreIncorrect: document.getElementById('score-incorrect')
};

// 1. INICIAR NUEVA RONDA
function startNewRound() {
  if (playlist.length === 0) {
    ui.status.innerText = "🏆 ¡JUEGO TERMINADO!";
    ui.btnMain.innerText = "🔄 Reiniciar todo";
    ui.btnMain.onclick = () => window.location.reload();
    return;
  }
  
  // Reset UI
  ui.btnMain.classList.add('hidden');
  ui.helpControls.classList.add('hidden');
  ui.answerSection.classList.add('hidden');
  ui.finalResult.classList.add('hidden');
  currentLimit = 5;

  // ELEGIR Y BORRAR (NO REPETIR)
  let randomIndex = Math.floor(Math.random() * playlist.length);
  currentSong = playlist[randomIndex];
  playlist.splice(randomIndex, 1);
  
  ui.status.innerText = "⏳ Cargando...";
  audioPlayer.src = currentSong.url;
  playAudio();
}

// 2. REPRODUCCIÓN
function playAudio() {
  if (isPlaying) return;
  isPlaying = true;
  toggleButtons(true);

  audioPlayer.currentTime = 0;
  audioPlayer.play()
    .then(() => {
      ui.status.innerText = `🔊 Escuchando (${currentLimit}s)...`;
      if (gameTimer) clearTimeout(gameTimer);
      gameTimer = setTimeout(stopAudio, currentLimit * 1000);
    })
    .catch(error => {
      console.error(error);
      ui.status.innerText = "⚠️ Error. Reintentar.";
      isPlaying = false;
      toggleButtons(false);
      ui.btnMain.classList.remove('hidden');
    });
}

// 3. DETENER
function stopAudio() {
  audioPlayer.pause();
  isPlaying = false;
  toggleButtons(false);
  
  ui.status.innerText = "⏹️ ¡Tiempo! ¿Qué tema es?";
  ui.helpControls.classList.remove('hidden');
  ui.answerSection.classList.remove('hidden');
}

// 4. FUNCIONES DE AYUDA
function replayAudio() { ui.status.innerText = "🔄 Repitiendo..."; playAudio(); }
function playExtended() { currentLimit = 10; ui.status.innerText = "👂 Pista 10s..."; playAudio(); }

// 5. REVELAR RESPUESTA
function revealAnswer() {
  ui.songTitle.innerText = currentSong.title;
  ui.finalResult.classList.remove('hidden');
  document.getElementById('btn-reveal').classList.add('hidden');
  ui.helpControls.classList.add('hidden');
}

// 6. VOTACIÓN (NUEVOS BOTONES)
function vote(isCorrect) {
  if (isCorrect) {
    scoreCorrect++;
    ui.scoreCorrect.innerText = scoreCorrect;
    ui.status.innerText = "Anashei";
  } else {
    scoreIncorrect++;
    ui.scoreIncorrect.innerText = scoreIncorrect;
    ui.status.innerText = "Sos malardo";
  }
  
  ui.finalResult.classList.add('hidden');
  ui.answerSection.classList.add('hidden');
  
  ui.btnMain.innerText = `⏭️ Siguiente (${playlist.length})`;
  ui.btnMain.classList.remove('hidden');
  
  document.getElementById('btn-reveal').classList.remove('hidden');
}

function toggleButtons(disabled) {
  const btns = document.querySelectorAll('button');
  btns.forEach(btn => btn.disabled = disabled);
}

audioPlayer.onerror = function() {
  ui.status.innerText = "⚠️ Link roto. Saltando...";
  setTimeout(startNewRound, 1000);
};