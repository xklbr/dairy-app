import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";

import { FirebaseDB } from "api";
import { fileUpload, loadNotes } from "../helpers";
import {
  addNewEmptyNote,
  deleteNoteByIdNote,
  savingNewNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  setSavingNote,
  updateNote,
} from "./dairy.slice";

export function startNewNote() {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/dairy/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
}

export function startLoadingNotes() {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('user uid don"t exist');

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
}

export function startSaveNote() {
  return async (dispatch, getState) => {
    dispatch(setSavingNote());
    const { uid } = getState().auth;
    const { active: note } = getState().dairy;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/dairy/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(note));
  };
}

export function startUploadingFiles(files = []) {
  return async (dispatch) => {
    dispatch(setSavingNote());

    const fileUploaded = [];
    for (const file of files) {
      fileUploaded.push(fileUpload(file));
    }

    const imageUrl = await Promise.all(fileUploaded);
    dispatch(setImagesToActiveNote(imageUrl));
  };
}

export function startDeletingNote() {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().dairy;

    const docRef = doc(FirebaseDB, `${uid}/dairy/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteByIdNote(note.id));
  };
}
