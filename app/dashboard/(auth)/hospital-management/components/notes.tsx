"use client";

import * as React from "react";
import { format } from "date-fns";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface Note {
  id: number;
  date: Date;
  text: string;
}

export function Notes() {
  const [notes, setNotes] = React.useState<Note[]>([
    { id: 1, date: new Date(2024, 10, 15), text: "Dr. Smith's surgery at 10 AM" },
    { id: 2, date: new Date(2024, 4, 15), text: "Staff meeting at 2 PM" },
    { id: 3, date: new Date(2024, 2, 16), text: "New patient orientation" },
    { id: 4, date: new Date(2024, 1, 16), text: "Inventory check" },
    { id: 2, date: new Date(2024, 2, 15), text: "Staff meeting at 2 PM" },
    { id: 5, date: new Date(2024, 3, 15), text: "Staff meeting at 2 PM" }
  ]);
  const [newNote, setNewNote] = React.useState("");

  const addNote = () => {
    if (newNote.trim()) {
      const newNoteObj: Note = {
        id: Date.now(),
        date: new Date(),
        text: newNote.trim()
      };
      setNotes([...notes, newNoteObj]);
      setNewNote("");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
        <CardDescription>Notes for yourself</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="divide-y">
          {notes.map((note) => (
            <li key={note.id} className="flex items-center justify-between py-3">
              <span className="font-medium">{note.text}</span>
              <span className="text-sm text-muted-foreground">
                {format(note.date, "MMM d, yyyy")}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="relative flex w-full space-x-2">
          <Input
            placeholder="Add a new note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addNote()}
          />
          <Button onClick={addNote} className="absolute end-0">
            <Plus className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
