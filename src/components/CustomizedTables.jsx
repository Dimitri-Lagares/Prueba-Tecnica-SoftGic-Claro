import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
    const { pokemon } = useContext(PokemonContext)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell>height</StyledTableCell>
            <StyledTableCell>base_experience</StyledTableCell>
            <StyledTableCell>order</StyledTableCell>
            <StyledTableCell>weight</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={pokemon.id}>
              <StyledTableCell component="th" scope="row">
                {pokemon.id}
              </StyledTableCell>
              <StyledTableCell>{pokemon.name}</StyledTableCell>
              <StyledTableCell>{pokemon.height}</StyledTableCell>
              <StyledTableCell>{pokemon.base_experience}</StyledTableCell>
              <StyledTableCell>{pokemon.order}</StyledTableCell>
              <StyledTableCell>{pokemon.weight}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}