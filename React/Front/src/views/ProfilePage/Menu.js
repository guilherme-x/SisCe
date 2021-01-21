import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from "@material-ui/core/styles";
import LaptopIcon from '@material-ui/icons/Laptop';
import classNames from "classnames";
import PersonAddIcon from '@material-ui/icons/PersonAdd'; import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container'
import CustomizedMenu from "./Menu";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Aparelhos from "./Aparelhos";
import Autocomplete from '@material-ui/lab/Autocomplete';
const reactStringReplace = require('react-string-replace')






const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    fab: {
        margin: theme.spacing.unit, // You might not need this now
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3
    },
}));



const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={5}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: "#0b102d",
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);





function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function CustomizedMenus() {

    const [statusAparelho, setStatusAparelho] = React.useState({

        checkedB: true,

    });
    const [ativo, setAtivo] = useState('Ativo')
    const handleChangeAparelho = (event) => {
        setStatusAparelho({ ...statusAparelho, [event.target.name]: event.target.checked });
        if (statusAparelho.checkedB == true) {
            setAtivo('Inativo')
        } else {
            setAtivo('Ativo')
        }
    };

    const IOSSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: '#52d869',
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: '#52d869',
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }))(({ classes, ...props }) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });



    const [openLoading, setOpenLoading] = React.useState(false);
    const handleCloseLoading = () => {
        setOpenLoading(false);
    };
    const handleToggleLoading = () => {
        setOpenLoading(!openLoading);
    };

    function SimpleBackdrop() {

        return (
            <div>
                <Backdrop className={classes.backdrop} open={openLoading} onClick={handleCloseLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }
    const [openSucess, setOpenSucess] = React.useState(false);

    const handleClickSucess = () => {
        setOpenSucess(true);
    };

    const handleCloseSucess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSucess(false);
    };

    const [openFail, setOpenFail] = React.useState(false);

    const handleClickFail = () => {
        setOpenFail(true);
    };

    const handleCloseFail = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenFail(false);
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openUser, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseFormUser = () => {
        setOpen(false);
        handleClose();
    };

    // VARIÁVEIS PARA INSERÇÃO DE CARGO DO COLABORADOR

    const [cargo, setCargo] = React.useState('');
    const [openCargo, setOpenCargo] = React.useState(false);

    const handleChangeCargo = (event) => {
        setCargo(event.target.value);
    };

    const handleCloseCargo = () => {
        setOpenCargo(false);
    };

    const handleOpenCargo = () => {
        setOpenCargo(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE SETOR DO COLABORADOR

    const [setor, setSetor] = React.useState('');
    const [openSetor, setOpenSetor] = React.useState(false);

    const handleChangeSetor = (event) => {
        setSetor(event.target.value);
    };

    const handleCloseSetor = () => {
        setOpenSetor(false);
    };

    const handleOpenSetor = () => {
        setOpenSetor(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE TELEFONE DO COLABORADOR

    const [Telefone, setTelefone] = React.useState('');
    const [openTelefone, setOpenTelefone] = React.useState(false);

    const handleChangeTelefone = (event) => {
        setTelefone(event.target.value);
    };

    const handleCloseTelefone = () => {
        setOpenTelefone(false);
    };

    const handleOpenTelefone = () => {
        setOpenTelefone(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE NOVO APARELHO

    const [openAparelho, setAparelho] = React.useState(false);



    const handleClickOpenAparelho = () => {
        setAparelho(true);
    };
    const handleCloseFormAparelho = () => {
        setAparelho(false);
        handleClose();
    };

    // VARIÁVEIS PARA INSERÇÃO DE MARCA DO APARELHO

    const [Marca, setMarca] = React.useState('');
    const [openMarca, setOpenMarca] = React.useState(false);

    const handleChangeMarca = (event) => {
        setMarca(event.target.value);
    };

    const handleCloseMarca = () => {
        setOpenMarca(false);
    };

    const handleOpenMarca = () => {
        setOpenMarca(true);
    };

    // VARIÁVEIS PARA INSERÇÃO DE SISTEMA OPERACIONAL DO APARELHO


    const [So, setSo] = React.useState('');
    const [openSo, setOpenSo] = React.useState(false);

    const handleChangeSo = (event) => {
        setSo(event.target.value);
    };

    const handleCloseSo = () => {
        setOpenSo(false);
    };

    const handleOpenSo = () => {
        setOpenSo(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE MEMÓRIA RAM DO APARELHO


    const [Modelo, setModelo] = React.useState('');
    const [openModelo, setOpenModelo] = React.useState(false);

    const handleChangeModelo = (event) => {
        setModelo(event.target.value);
    };

    const handleCloseModelo = () => {
        setOpenModelo(false);
    };

    const handleOpenModelo = () => {
        setOpenModelo(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE MEMÓRIA RAM DO APARELHO


    const [Ram, setRam] = React.useState('');
    const [openRam, setOpenRam] = React.useState(false);

    const handleChangeRam = (event) => {
        setRam(event.target.value);
    };

    const handleCloseRam = () => {
        setOpenRam(false);
    };

    const handleOpenRam = () => {
        setOpenRam(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE PROCESSADOR RAM DO APARELHO


    const [Processador, setProcessador] = React.useState('');
    const [openProcessador, setOpenProcessador] = React.useState(false);

    const handleChangeProcessador = (event) => {
        setProcessador(event.target.value);
    };

    const handleCloseProcessador = () => {
        setOpenProcessador(false);
    };

    const handleOpenProcessador = () => {
        setOpenProcessador(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE MAC DO APARELHO


    const [Mac, setMac] = React.useState('');
    const [openMac, setOpenMac] = React.useState(false);

    const handleChangeMac = (event) => {
        setMac(event.target.value);
    };

    const handleCloseMac = () => {
        setOpenMac(false);
    };

    const handleOpenMac = () => {
        setOpenMac(true);
    };

    // VARIÁVEIS PARA INSERÇÃO DE OBSERVAÇÕES DO APARELHO


    const [Obs, setObs] = React.useState('');
    const [openObs, setOpenObs] = React.useState(false);

    const handleChangeObs = (event) => {
        setObs(event.target.value);
    };

    const handleCloseObs = () => {
        setOpenObs(false);
    };

    const handleOpenObs = () => {
        setOpenObs(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE STATUS DO APARELHO


    const [Status, setStatus] = React.useState('');
    const [openStatus, setOpenStatus] = React.useState(false);

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleCloseStatus = () => {
        setOpenStatus(false);
    };

    const handleOpenStatus = () => {
        setOpenStatus(true);
    };


    // POSTAGEM DOS DADOS NA API


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var [lista, setLista] = useState([]);

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cargoUser, setCargoUser] = useState("");


    var urlencoded = new URLSearchParams();
    urlencoded.append("nome", nome);
    urlencoded.append("cpf", cpf);
    urlencoded.append("cargo", cargoUser);
    urlencoded.append("telefone", Telefone);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    var output;
    async function handleSubmit(evt) {
        handleToggleLoading();
        evt.preventDefault();
        await fetch("https://sisce.herokuapp.com/sisce/usuarios", requestOptions)
            .then(response => response.status)
            .then(result => lista.setLista = result)
            .catch(error => console.log('error', error));
        if (lista.setLista == 201) {
            handleClickSucess();
            handleCloseLoading();
        } else {
            handleClickFail();
            handleCloseLoading();
        }

    }

    var urlaparelho = new URLSearchParams();
    urlaparelho.append("marca", Marca);
    urlaparelho.append("modelo", Modelo);
    urlaparelho.append("sistema_operacional", So);
    urlaparelho.append("mac_wlan", Mac);
    urlaparelho.append("obs", Obs);
    urlaparelho.append("processador", Processador);
    urlaparelho.append("status", Status);



    var requestOptionsAparelho = {
        method: 'POST',
        headers: myHeaders,
        body: urlaparelho,
        redirect: 'follow'
    };


    async function handleSubmitAparelho(evt) {
        handleToggleLoading();
        evt.preventDefault();
        await fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptionsAparelho)
            .then(response => response.status)
            .then(result => lista.setLista = result)
            .catch(error => console.log('error', error));
        if (lista.setLista == 201) {
            handleClickSucess();
            handleCloseLoading();
        } else {
            handleClickFail();
            handleCloseLoading();
        }
        window.location.reload(false);

    }

    // VARIÁVEIS PARA INSERÇÃO DE NOVA AQUISIÇÃO

    const [openAquisicao, setAquisicao] = React.useState(false);



    const handleClickOpenAquisicao = () => {
        setAquisicao(true);
    };
    const handleCloseFormAquisicao = () => {
        setAquisicao(false);
        handleClose();
    };

    // VARIÁVEIS PARA INSERÇÃO DE MOTIVO DA AQUISIÇÃO

    const [MotivoAq, setMotivoAq] = React.useState('');
    const [openMotivoAq, setOpenMotivoAq] = React.useState(false);

    const handleChangeMotivoAq = (event) => {
        setMotivoAq(event.target.value);
    };

    const handleCloseMotivoAq = () => {
        setOpenMotivoAq(false);
    };

    const handleOpenMotivoAq = () => {
        setOpenMotivoAq(true);
    };

    // VARIÁVEIS PARA INSERÇÃO DE DATA DA AQUISIÇÃO

    const [formattedData, setFormattedData] = React.useState('');
    const [Dataaq, setDataaq] = React.useState('');
    const [openDataaq, setOpenDataaq] = React.useState(false);

    const handleChangeDataaq = (event) => {
        setDataaq(event.target.value);
        setFormattedData(Dataaq.replace(/T/i, ' '));
        console.log(formattedData)
        console.log(UsuarioAq);
        console.log(AparelhoAq);
    };

    const handleCloseDataaq = () => {
        setOpenDataaq(false);
    };

    const handleOpenDataaq = () => {
        setOpenDataaq(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE USUARIO DA AQUISIÇÃO


    const [UsuarioAq, setUsuarioAq] = React.useState('');
    const [openUsuarioAq, setOpenUsuarioAq] = React.useState(false);

    const handleChangeUsuarioAq = (event) => {
        setUsuarioAq(event.target.value);
    };

    const handleCloseUsuarioAq = () => {
        setOpenUsuarioAq(false);
    };

    const handleOpenUsuarioAq = () => {
        setOpenUsuarioAq(true);
    };


    // VARIÁVEIS PARA INSERÇÃO DE APARELHO DA AQUISIÇÃO


    const [AparelhoAq, setAparelhoAq] = React.useState('');
    const [openAparelhoAq, setOpenAparelhoAq] = React.useState(false);

    const handleChangeAparelhoAq = (event) => {
        setAparelhoAq(event.target.value);
    };

    const handleCloseAparelhoAq = () => {
        setOpenAparelhoAq(false);
    };

    const handleOpenAparelhoAq = () => {
        setOpenAparelhoAq(true);
    };



    // FETCH AQUISIÇÕES

    var urlaquisicao = new URLSearchParams();
    urlaquisicao.append("motivo", MotivoAq);
    urlaquisicao.append("data_aquisicao", formattedData);
    urlaquisicao.append("fk_usuario", UsuarioAq);
    urlaquisicao.append("fk_aparelho", AparelhoAq);


    var requestOptionsAquisicao = {
        method: 'POST',
        headers: myHeaders,
        body: urlaquisicao,
        redirect: 'follow'
    };


    async function handleSubmitAquisicao(evt) {
        handleToggleLoading();
        evt.preventDefault();
        await fetch("https://sisce.herokuapp.com/sisce/aquisicoes", requestOptionsAquisicao)
            .then(response => response.status)
            .then(result => lista.setLista = result)
            .catch(error => console.log('error', error));
        if (lista.setLista == 201) {
            handleClickSucess();
            handleCloseLoading();
        } else {
            handleClickFail();
            handleCloseLoading();
        }
        window.location.reload(false);

    }

    var [lista, setLista] = useState([]);
    var requestOptionsAparelhoAq = {
        method: 'GET',
        redirect: 'follow',
    };
    fetch("https://sisce.herokuapp.com/sisce/aparelhos", requestOptionsAparelhoAq)
        .then(response => response.json())
        .then(result => lista.setLista = (result))
        .catch(error => console.log('error', error));

    var saida = []
    var obj = ([[lista.setLista][0]][0]);
    for (var i in obj)
        saida.push(obj[i]);

    // FETCH USUÁRIOS

    var [listaUsuarioAq, setListaUsuarioAq] = useState([]);
    var requestOptionsUsuariosAq = {
        method: 'GET',
        redirect: 'follow',
    };
    fetch("https://sisce.herokuapp.com/sisce/usuarios", requestOptionsUsuariosAq)
        .then(response => response.json())
        .then(result => listaUsuarioAq.setListaUsuarioAq = (result))
        .catch(error => console.log('error', error));

    var saidaUsuarioAq = []
    var obj = ([[listaUsuarioAq.setListaUsuarioAq][0]][0]);
    for (var i in obj)
        saidaUsuarioAq.push(obj[i]);
    var curr = new Date();
    var date = [curr.getFullYear(),curr.getUTCMonth(),curr.getUTCDate(), curr.getHours(), curr.getMinutes()]
    return (
        <div>
            <Fab className={classes.fab} onClick={handleClick} color="primary" style={{ position: "fixed", backgroundColor: "#0b102d" }}>
                <AddIcon />
            </Fab>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleClickOpenAquisicao}>
                    <ListItemIcon>
                        <NoteAddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="• Registrar Locação de Aparelho" />
                </StyledMenuItem>
                <Dialog open={openAquisicao} onClose={handleCloseFormAquisicao} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmitAquisicao}>
                        <DialogTitle id="form-dialog-title">Registrar Nova Locação</DialogTitle>

                        <DialogContent>
                            {/* <FormControl fullWidth margin="dense" className={classes.formControl}>
                            <InputLabel id="sistema-operacional-label">Aparelho</InputLabel>
                            <Select
                                labelId="sistema-operacional-label"
                                id="sistema-operacional"
                                open={openAparelhoAq}
                                onClose={handleCloseAparelhoAq}
                                onOpen={handleOpenAparelhoAq}
                                value={AparelhoAq}
                                fullWidth
                                onChange={handleChangeAparelhoAq}
                                inputProps={{
                                    onChange: e => setAparelhoAq(e.target.value)
                                }}
                            >

                                {saida.map(saida => (
                                    <MenuItem key={saida.idaparelho}>
                                            {saida.marca}
                                            {saida.modelo}
                                            {saida.so}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}

                            <Autocomplete
                                id="combo-box-demo"
                                fullWidth="true"
                                options={saida}
                                getOptionLabel={(option) => (option.marca + ' ' + option.modelo + ' ' + option.mac)}
                                style={{ width: "100%" }}
                                renderInput={(params) => <TextField {...params} label="Aparelho (Marca Modelo Mac)" variant="outlined" />}
                                inputProps={{
                                    onChange: e => setAparelhoAq(e.target.value.idaparelho)
                                }}
                            />

                            <Autocomplete
                                id="combo-box-demo"
                                fullWidth="true"
                                options={saidaUsuarioAq}
                                getOptionLabel={(option) => (option.nome)}
                                style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
                                renderInput={(params) => <TextField {...params} label="Usuário (Nome Completo)" variant="outlined" />}
                                inputProps={{
                                    onChange: e => setUsuarioAq(e.target.value.idusuario)
                                }}
                            />
                            <TextField
                                id="datetime-local"
                                fullWidth
                                label="Data e Hora da Locação"
                                type="datetime-local"
                                onChange={handleChangeDataaq}
                                style={{marginBottom:"10px"}}
                                defaultValue={date[0]+'-0'+(date[1]+1)+'-'+date[2]+'T'+date[3]+':'+date[4]}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="motivo"
                                fullWidth
                                name="motivo"
                                label="Motivo"
                                type="text"
                                multiline
                                inputProps={{
                                    onChange: e => setMotivoAq(e.target.value)
                                }}
                            />
                        </DialogContent>


                        <DialogActions>
                            <Button onClick={handleCloseFormAquisicao} color="primary">
                                Cancelar
          </Button>
                            <Button type="submit" onClick={handleCloseFormAquisicao} color="primary">
                                Cadastrar
          </Button>
                        </DialogActions>
                    </form>
                </Dialog>

                <StyledMenuItem onClick={handleClickOpen}>
                    <ListItemIcon>
                        <PersonAddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="• Cadastrar Colaborador(a)" />
                </StyledMenuItem>
                <Dialog open={openUser} onClose={handleCloseFormUser} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmit}>
                        <DialogTitle id="form-dialog-title">Cadastrar Colaborador(a)</DialogTitle>

                        <DialogContent>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                required="true"
                                name="nome"
                                label="Nome Completo"
                                type="name"
                                fullWidth
                                inputProps={{
                                    onChange: e => setNome(e.target.value)
                                }}
                            />
                            <FormControl fullWidth margin="dense" className={classes.formControl}>
                                <InputLabel id="sistema-operacional-label">Setor</InputLabel>
                                <Select
                                    labelId="sistema-operacional-label"
                                    id="sistema-operacional"
                                    open={openSetor}
                                    onClose={handleCloseSetor}
                                    onOpen={handleOpenSetor}
                                    value={setor}
                                    fullWidth
                                    onChange={handleChangeSetor}
                                    inputProps={{
                                        onChange: e => setCargoUser(e.target.value)
                                    }}
                                >
                                    <MenuItem value={1}>NOC</MenuItem>
                                    <MenuItem value={5}>N2</MenuItem>
                                    <MenuItem value={2}>Financeiro</MenuItem>
                                    <MenuItem value={3}>Comercial</MenuItem>
                                    <MenuItem value={7}>Gerência</MenuItem>
                                    <MenuItem value={4}>Suporte</MenuItem>
                                    <MenuItem value={6}>Recursos Humanos</MenuItem>

                                </Select>
                            </FormControl>

                            <FormControl fullWidth margin="dense" className={classes.formControl}>
                                <InputLabel id="sistema-operacional-label">Cargo</InputLabel>
                                <Select
                                    labelId="sistema-operacional-label"
                                    id="sistema-operacional"
                                    open={openCargo}
                                    onClose={handleCloseCargo}
                                    onOpen={handleOpenCargo}
                                    value={cargo}
                                    fullWidth
                                    name="cargo"
                                    onChange={handleChangeCargo}
                                >
                                    <MenuItem value={1}>Atendente</MenuItem>
                                    <MenuItem value={2}>Supervisor</MenuItem>
                                    <MenuItem value={3}>Auxiliar</MenuItem>
                                    <MenuItem value={4}>Diretor Financeiro</MenuItem>
                                    <MenuItem value={5}>Gerente Financeiro</MenuItem>
                                    <MenuItem value={6}>Analista Financeiro</MenuItem>
                                    <MenuItem value={7}>Gestor de Marketing</MenuItem>
                                    <MenuItem value={8}>Gerente de Vendas</MenuItem>
                                    <MenuItem value={9}>Consultor de Vendas</MenuItem>
                                    <MenuItem value={10}>Técnico de Suporte</MenuItem>
                                    <MenuItem value={11}>Instalador</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                style={{ marginRight: "8px" }}
                                id="date"
                                label="Datda de Admissão"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                style={{ marginRight: "8px" }}
                                id="cpf"
                                name="cpf"
                                label="CPF"
                                type="text"
                                inputProps={{
                                    onChange: e => setCpf(e.target.value)
                                }}
                            />
                            <TextField
                                id="telefone"
                                name="telefone"
                                label="Telefone"
                                type="tel"
                                inputProps={{
                                    onChange: e => setTelefone(e.target.value)
                                }}
                            />
                        </DialogContent>


                        <DialogActions>
                            <Button onClick={handleCloseFormUser} color="primary">
                                Cancelar
          </Button>
                            <Button type="submit" onClick={handleCloseFormUser} color="primary">
                                Cadastrar
          </Button>
                        </DialogActions>
                    </form>
                </Dialog>


                <StyledMenuItem onClick={handleClickOpenAparelho}>
                    <ListItemIcon>
                        <LaptopIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="• Cadastrar Aparelho" />
                </StyledMenuItem>
                <Dialog open={openAparelho} onClose={handleCloseFormAparelho} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmitAparelho} >
                        <DialogTitle id="form-dialog-title">Cadastrar Aparelho</DialogTitle>

                        <DialogContent>
                            <FormControlLabel
                                control={<IOSSwitch checked={statusAparelho.checkedB} onChange={handleChangeAparelho} name="checkedB" />}
                                label={ativo}
                            />
                            <FormControl fullWidth margin="dense" className={classes.formControl}>
                                <InputLabel id="sistema-operacional-label">Marca</InputLabel>
                                <Select
                                    labelId="sistema-operacional-label"
                                    id="sistema-operacional"
                                    open={openMarca}
                                    onClose={handleCloseMarca}
                                    onOpen={handleOpenMarca}
                                    value={Marca}
                                    onChange={handleChangeMarca}
                                    inputProps={{
                                        onChange: e => setMarca(e.target.value)
                                    }}
                                >
                                    <MenuItem value={'Acer'}>Acer</MenuItem>
                                    <MenuItem value={'Lenovo'}>Lenovo</MenuItem>
                                    <MenuItem value={'Dell'}>Dell</MenuItem>
                                    <MenuItem value={'Positivo'}>Positivo</MenuItem>
                                    <MenuItem value={'Apple'}>Apple</MenuItem>
                                    <MenuItem value={'Compaq'}>Compaq</MenuItem>
                                    <MenuItem value={'Asus'}>Asus</MenuItem>
                                    <MenuItem value={'Vaio'}>Vaio</MenuItem>
                                    <MenuItem value={'Outra'}>Outra</MenuItem>


                                </Select>
                            </FormControl>

                            <FormControl style={{ width: "45%" }} margin="dense" className={classes.formControl}>
                                <InputLabel id="sistema-operacional-label">Sistema Operacional</InputLabel>
                                <Select
                                    labelId="sistema-operacional-label"
                                    id="sistema-operacional"
                                    open={openSo}
                                    onClose={handleCloseSo}
                                    onOpen={handleOpenSo}
                                    value={So}
                                    fullWidth
                                    name="SistemaOperacional"
                                    onChange={handleChangeSo}
                                >
                                    <MenuItem value={'Windows 10'}>Windows 10</MenuItem>
                                    <MenuItem value={'Windows 7'}>Windows 7</MenuItem>
                                    <MenuItem value={'Windows Vista'}>Windows Vista</MenuItem>
                                    <MenuItem value={'Windows XP'}>Windows XP</MenuItem>
                                    <MenuItem value={'Mac OS'}>Mac OS</MenuItem>
                                    <MenuItem value={'Linux'}>Linux</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                autoFocus
                                margin="dense"
                                id="modelo"
                                name="modelo"
                                label="Modelo"
                                type="name"
                                inputProps={{
                                    onChange: e => setModelo(e.target.value),
                                }}
                            />

                            <TextField
                                style={{ width: "45%", marginRight: "10%" }}
                                fullWidth
                                autoFocus
                                margin="dense"
                                id="processador"
                                name="processador"
                                label="Processador"
                                type="name"
                                inputProps={{
                                    onChange: e => setProcessador(e.target.value),
                                }}
                            />

                            <FormControl style={{ width: "45%" }} fullWidth margin="dense" className={classes.formControl}>
                                <InputLabel id="sistema-operacional-label">Memória RAM</InputLabel>
                                <Select
                                    labelId="sistema-operacional-label"
                                    id="sistema-operacional"
                                    open={openRam}
                                    onClose={handleCloseRam}
                                    onOpen={handleOpenRam}
                                    value={Ram}
                                    fullWidth
                                    name="memoria"
                                    onChange={handleChangeRam}
                                >
                                    <MenuItem value={2}>2 Gb</MenuItem>
                                    <MenuItem value={4}>4 Gb</MenuItem>
                                    <MenuItem value={6}>6 Gb</MenuItem>
                                    <MenuItem value={8}>8 Gb</MenuItem>
                                    <MenuItem value={12}>12 Gb</MenuItem>
                                    <MenuItem value={16}>16 Gb</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                id="mac"
                                name="mac"
                                label="Endereço MAC"
                                type="text"
                                inputProps={{
                                    onChange: e => setMac(e.target.value)
                                }}
                            />
                            <TextField
                                fullWidth
                                style={{ height: "40px" }}
                                autoFocus
                                margin="dense"
                                id="obs"
                                name="obs"
                                label="Observações"
                                type="name"
                                inputProps={{
                                    onChange: e => setObs(e.target.value),
                                }}
                            />
                        </DialogContent>


                        <DialogActions>
                            <Button onClick={handleCloseFormAparelho} color="primary">
                                Cancelar
          </Button>
                            <Button type="submit" onClick={handleCloseFormAparelho} color="primary">
                                Cadastrar
          </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </StyledMenu>
            <Snackbar open={openSucess} autoHideDuration={6000} onClose={handleCloseSucess}>
                <Alert onClose={handleCloseSucess} severity="success">
                    Cadastrado com Sucesso!
        </Alert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={6000} onClose={handleCloseFail}>
                <Alert onClose={handleCloseFail} severity="error">
                    Ocorreu um Erro!
        </Alert>
            </Snackbar>
            <SimpleBackdrop />
        </div>
    );
}