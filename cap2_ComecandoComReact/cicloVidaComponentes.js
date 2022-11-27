//INITIALIZING => Admite dois parametros: props e state;

//MOUNTING => Os métodos dessa fase são usados com frequencia:

    //render() : Esse metodo retorna um elemento react a ser carregado pelo componente.

    //componentDidMount() : momento ideal para execuçao de scripts que bloqueiam a renderização. exemplo chamada de api de dados.

//UPDATING => Sempre que um estado de um componente muda essa fase é disparada, e acontece uma chamada para o metodos acima.

    //geteDerivedStateFromProps()
    //shouldComponentUpdate()
    //getSnapdhotBefopeUpdate()
    //render()
    //componentDidUpdate()

//UNMOUNTING => fase da desmontagem do componente;

    //componentWillUnmount()