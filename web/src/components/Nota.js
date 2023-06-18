import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Modal, TextField } from '@mui/material';

export default function Nota(props) {
  const [open, setOpen] = useState(true);

  const [title, setTitle] = useState(props.nota.titulo);
  const [content, setContent] = useState(props.nota.descripcion);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    //const updatedNote = { ...note, title, content };
    //onSave(updatedNote);
  };

  return (
    <>
      <Card sx={{ minWidth: 300, margin: '10px' }} alt='nota'>
        <CardContent>
          <Typography sx={{ fontSize: 16 }}
            color="text.secondary"
            gutterBottom
            data-testid="titulo">
            {props.nota.titulo}
          </Typography>
          <Typography variant="body2" data-testid="descripcion">
            {props.nota.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Editar</Button>
          <Button size="small">Eliminar</Button>
        </CardActions>
      </Card>

      {/* <Modal open={open} onClose={onClose}>
        <div>
          <h2>Edit Note</h2>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
          />
          <TextField
            label="Content"
            value={content}
            onChange={handleContentChange}
            multiline
            fullWidth
          />
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Modal> */}
    </>
  );
}
