// note page will display the note title and content, and also have a button to edit the note, which will navigate to a new page where the user can edit the note title and content and save it. The page will also handle the deletion of the note by calling the deleteNote method of the note service and navigating back to the notes list page.

import Link from "next/link";

const NotesPage = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold mb-6">My Notes</h1>
      {/* create list of 5 place holder notes names Note(N) each will link to the note page of using that number as the note id  */}
      <ul className="space-y-2">
        <li>
          <Link href="/notes/1" className="hover:underline">
            Note 1
          </Link>
        </li>
        <li>
          <Link href="/notes/2" className="hover:underline">
            Note 2
          </Link>
        </li>
        <li>
          <Link href="/notes/3" className="hover:underline">
            Note 3
          </Link>
        </li>
        <li>
          <Link href="/notes/4" className=" hover:underline">
            Note 4
          </Link>
        </li>
        <li>
          <Link href="/notes/5" className=" hover:underline">
            Note 5
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotesPage;
