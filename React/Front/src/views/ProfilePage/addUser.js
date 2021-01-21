import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from "@material-ui/core/styles";
import LaptopIcon from '@material-ui/icons/Laptop'; import classNames from "classnames";
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
const useStyles = makeStyles((theme) => ({
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



export default function addUser(){

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    
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
    

return(
    <Dialog open={open} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Cadastrar Colaborador(a)</DialogTitle>
                    <DialogContent>

                        <FormControl fullWidth margin="dense" className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Setor</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openSetor}
                                onClose={handleCloseSetor}
                                onOpen={handleOpenSetor}
                                value={setor}
                                fullWidth
                                onChange={handleChangeSetor}
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
                            <InputLabel id="demo-controlled-open-select-label">cargo</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openCargo}
                                onClose={handleCloseCargo}
                                onOpen={handleOpenCargo}
                                value={cargo}
                                fullWidth
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
                            fullWidth
                            id="cpf"
                            label="Digite o CPF"
                            type="text"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseForm} color="primary">
                            Cancelar
          </Button>
                        <Button onClick={handleCloseForm} color="primary">
                            Cadastrar
          </Button>
                    </DialogActions>
                </Dialog>
);
 
}