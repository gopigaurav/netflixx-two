import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { render } from "react-dom";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";

const contentStyles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const [items, setItems] = useState<any>([
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "TV Shows",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "New & Popular",
    },
    {
      id: 4,
      name: "My List",
    },
  ]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:!hidden">
      <div className="">
        <CheeseburgerMenu
          isOpen={menuOpen}
          closeCallback={closeMenu}
          className="bg-black"
          backgroundColor="#3f3f3f"
        >
          <div className="flex flex-col w-full h-3/6 p-6">
            {items.map((data) => (
              <div
                className="cursor-pointer text-white p-3 text-xl"
                key={data.id}
                onClick={closeMenu}
              >
                <Link href="">
                  <p>{data.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </CheeseburgerMenu>
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={openMenu}
          width={20}
          height={15}
          rotate={0}
          color="grey"
          animationDuration={0.5}
          className="cursor-pointer"
        />
      </div>

      {/*
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      > 
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>TV Shows</MenuItem>
        <MenuItem onClick={handleClose}>Movies</MenuItem>
        <MenuItem onClick={handleClose}>New & Popular</MenuItem>
        <MenuItem onClick={handleClose}>My List</MenuItem>
      </Menu>*/}
    </div>
  );
}
