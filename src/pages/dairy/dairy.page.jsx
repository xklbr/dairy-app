import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { DairyLayout } from "layouts";
import { NoteView, NothingSelectedView } from "../../features/dairy/views";
import { startNewNote } from "../../features/dairy/store";

export function DairyPage() {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.dairy);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <DairyLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </DairyLayout>
  );
}
