import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SortMenu() {
    let now = new Date();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const previous = () => {
        let allTasks = JSON.parse(localStorage["Tasks"])
        const updatedTasks = allTasks.filter((task) => task.date !== now)
        localStorage.setItem("Previous", updatedTasks)
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Сортировать
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} onSubmit={previous}>Прошедшие</MenuItem>
                <MenuItem onClick={handleClose}>На сегодня</MenuItem>
                <MenuItem onClick={handleClose}>Предстоящие</MenuItem>
            </Menu>
        </div>
    );
}
