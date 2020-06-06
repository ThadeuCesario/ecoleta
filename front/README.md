<h1>Projeto Ecoleta</h1>
<hr/>
<h4>Anotações:</h4>
<br/>
<strong>JSX</strong>
<p>JSX é basicamente a possibilidade de escrever HTML diretamente em nosso javascript ou typescript.
Portanto, temos a sintaxe de XML dentro do Javascript
</p>
<hr/>
<strong>Componentes</strong>
<p>É a possibilidade de separar nossa aplicação em blocos que podem ser reutilizados.</p>
<hr/>
<strong>Typescript</strong>
<p>O typescript é um superset para o javascript. Nos auxiliando durante o processo de desenvolvimento.
</p><br/>
Por exemplo se passarmos um parâmetro para uma componente que não está pronto para receber esse
parâmetro, então o typescript nos gera um erro informando o problema.
<hr/>
<strong>Interface</strong>
<p>É uma forma de definir a tipagem de um objeto. Lembre-se que nossos elementos do react, quando 
estamos trabalhando com typescript devem conter suas tipagens declarada.</p>

<code>
<pre>
interface HeaderProps {
    title: string;
}

const Header: React.FC< HeaderProps > = props => {
    return (
        < header >< /header >
    );
}
</pre>
</code>
<hr/>

<strong></strong>
<p></p>
<hr/>