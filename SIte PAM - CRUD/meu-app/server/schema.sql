create database if not exists bdTeste;

use bdTeste;

create table if not exists tbDesenvolvedor(
    idDesenvolvedor int primary key auto_increment,
    nomeDesenvolvedor varchar(80) not null,
    emailDesenvolvedor varchar(120) not null unique,
    cargo varchar(60) not null,
    githubUrl varchar(160),
    instagramUrl varchar(160)
);

create table if not exists tbTarefa(
    idTarefa int primary key auto_increment,
    titulo varchar(100) not null,
    descricao varchar(255) not null,
    status varchar(30) not null default 'pendente',
    dataCriacao timestamp not null default current_timestamp,
    idDesenvolvedor int not null,
    foreign key (idDesenvolvedor) references tbDesenvolvedor(idDesenvolvedor)
);

alter table tbDesenvolvedor
    add column if not exists githubUrl varchar(160);

alter table tbDesenvolvedor
    add column if not exists instagramUrl varchar(160);

update tbDesenvolvedor antigo
left join tbDesenvolvedor novo
    on novo.emailDesenvolvedor = 'maykon@teste.com'
set
    antigo.nomeDesenvolvedor = 'Maykon Oliveira Almeida',
    antigo.emailDesenvolvedor = 'maykon@teste.com',
    antigo.cargo = 'Full Stack',
    antigo.githubUrl = 'https://github.com/maykisz',
    antigo.instagramUrl = 'https://www.instagram.com/maykisz_/'
where antigo.emailDesenvolvedor = 'ana@teste.com'
and novo.idDesenvolvedor is null;

update tbDesenvolvedor antigo
left join tbDesenvolvedor novo
    on novo.emailDesenvolvedor = 'pedro@teste.com'
set
    antigo.nomeDesenvolvedor = 'Pedro Henrique de Oliveira',
    antigo.emailDesenvolvedor = 'pedro@teste.com',
    antigo.cargo = 'Full Stack',
    antigo.githubUrl = 'https://github.com/PedroSantss',
    antigo.instagramUrl = 'https://www.instagram.com/pedro_hsantss/'
where antigo.emailDesenvolvedor = 'joao@teste.com'
and novo.idDesenvolvedor is null;

insert into tbDesenvolvedor (
    nomeDesenvolvedor,
    emailDesenvolvedor,
    cargo,
    githubUrl,
    instagramUrl
)
select
    'Maykon Oliveira Almeida',
    'maykon@teste.com',
    'Full Stack',
    'https://github.com/maykisz',
    'https://www.instagram.com/maykisz_/'
where not exists (
    select 1 from tbDesenvolvedor where emailDesenvolvedor = 'maykon@teste.com'
);

insert into tbDesenvolvedor (
    nomeDesenvolvedor,
    emailDesenvolvedor,
    cargo,
    githubUrl,
    instagramUrl
)
select
    'Pedro Henrique de Oliveira',
    'pedro@teste.com',
    'Full Stack',
    'https://github.com/PedroSantss',
    'https://www.instagram.com/pedro_hsantss/'
where not exists (
    select 1 from tbDesenvolvedor where emailDesenvolvedor = 'pedro@teste.com'
);

update tbDesenvolvedor
set
    nomeDesenvolvedor = 'Maykon Oliveira Almeida',
    cargo = 'Full Stack',
    githubUrl = 'https://github.com/maykisz',
    instagramUrl = 'https://www.instagram.com/maykisz_/'
where emailDesenvolvedor = 'maykon@teste.com';

update tbDesenvolvedor
set
    nomeDesenvolvedor = 'Pedro Henrique de Oliveira',
    cargo = 'Full Stack',
    githubUrl = 'https://github.com/PedroSantss',
    instagramUrl = 'https://www.instagram.com/pedro_hsantss/'
where emailDesenvolvedor = 'pedro@teste.com';

update tbTarefa t
join tbDesenvolvedor antigo
    on antigo.emailDesenvolvedor = 'ana@teste.com'
join tbDesenvolvedor novo
    on novo.emailDesenvolvedor = 'maykon@teste.com'
set t.idDesenvolvedor = novo.idDesenvolvedor
where t.idDesenvolvedor = antigo.idDesenvolvedor;

update tbTarefa t
join tbDesenvolvedor antigo
    on antigo.emailDesenvolvedor = 'joao@teste.com'
join tbDesenvolvedor novo
    on novo.emailDesenvolvedor = 'pedro@teste.com'
set t.idDesenvolvedor = novo.idDesenvolvedor
where t.idDesenvolvedor = antigo.idDesenvolvedor;

delete from tbDesenvolvedor
where emailDesenvolvedor in ('ana@teste.com', 'joao@teste.com', 'maria@teste.com')
and idDesenvolvedor not in (
    select distinct idDesenvolvedor from tbTarefa
);

insert into tbTarefa (titulo, descricao, status, idDesenvolvedor)
select 'Criar tela inicial', 'Montar a primeira tela do aplicativo.', 'pendente', d.idDesenvolvedor
from tbDesenvolvedor d
where d.emailDesenvolvedor = 'maykon@teste.com'
and not exists (
    select 1 from tbTarefa where titulo = 'Criar tela inicial'
);

insert into tbTarefa (titulo, descricao, status, idDesenvolvedor)
select 'Configurar API', 'Preparar rotas do backend para o app.', 'em andamento', d.idDesenvolvedor
from tbDesenvolvedor d
where d.emailDesenvolvedor = 'pedro@teste.com'
and not exists (
    select 1 from tbTarefa where titulo = 'Configurar API'
);

select * from tbDesenvolvedor;
select * from tbTarefa;
