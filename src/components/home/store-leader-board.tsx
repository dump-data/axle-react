import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StoreLeaderBoard() {
  const [selectedUser, setSelectedUser]: any = useState(topPlayers[0]);

  const handleTableRowClick = (userData: any) => {
    setSelectedUser(userData);
  };

  return (
    <div>
      <h3 className="my-5 text-2xl font-bold">Top Players</h3>
      <div className="flex  my-8 gap-8">
        <div className="flex flex-col items-center p-6 bg-secondary/80 min-w-[350px]">
          {selectedUser && (
            <>
              <Avatar className="w-48 h-48">
                <AvatarImage src={selectedUser.avatar} />
                <AvatarFallback className="text-9xl">
                  {selectedUser.name[0]}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-2 items-center">
                <p className="text-xl font-semibold mt-2">
                  {selectedUser.name}
                </p>
                <p>@{selectedUser.username}</p>
                <p>Rating: {selectedUser.rating}</p>
              </div>
            </>
          )}
        </div>

        <div className="w-full p-6 bg-secondary/80">
          <Table>
            <TableCaption>20 Feb to 26 Feb</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Place</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPlayers.map((player, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleTableRowClick(player)}
                  className={
                    selectedUser && selectedUser.username === player.username
                      ? "bg-primary/50 cursor-pointer hover:bg-primary/50"
                      : "cursor-pointer hover:bg-primary/50"
                  }
                >
                  <TableCell>{index + 1}st</TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>@{player.username}</TableCell>
                  <TableCell>{player.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default StoreLeaderBoard;
const topPlayers = [
  {
    name: "Sagar Nirwal",
    username: "sn247776",
    rating: 12000,
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "John Doe",
    username: "john_doe123",
    rating: 11000,
    avatar: "https://example.com/johndoe.png",
  },
  {
    name: "Jane Smith",
    username: "janesmith99",
    rating: 10500,
    avatar: "https://example.com/janesmith.png",
  },
  {
    name: "Mike Johnson",
    username: "mikej",
    rating: 10000,
    avatar: "https://example.com/mikejohnson.png",
  },
  {
    name: "Emily Brown",
    username: "emilyb",
    rating: 9500,
    avatar: "https://example.com/emilybrown.png",
  },
];
