import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "features/dairy";

export function SidebarItem({ id, title = "", body, date, imageUrls = [] }) {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  const shortTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  return (
    <List>
      <ListItem key={id} disablePadding>
        <ListItemButton onClick={onClickNote}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={shortTitle} />
            <ListItemText secondary={body} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
