import React from "react";
import { NavLink } from "react-router-dom";

import LinearThumb from "./thumbs/linear.jpg";
import BinaryThumb from "./thumbs/binary.jpg";
import NQueensThumb from "./thumbs/nqueens.jpg";
import PathThumb from "./thumbs/path.jpg";
import RatThumb from "./thumbs/rat.jpg";
import SortingThumb from "./thumbs/sorting.jpg";
import WordSearch from "./thumbs/word_search.jpg";

import "./bootstrap.min.css";

export default class IndexTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container mt-2 bg-white">
                <div className="text-center text-muted">
                    <p>
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    In mathematics and computer science, an algorithm () is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
                    </p>
                </div>
                <center>
                    {/* <div className="row mt-2"> */}
                    <div className="col mt-2">
                        <div className="col-sm-4 col-6">
                            <NavLink to="/word-search">
                                {/* <img
                                    className="img-fluid w-20 shadowB"
                                    src={WordSearch}
                                    alt="Word Searching"
                                /> */}
                                <p className="text-dark thumb-title h3">
                                    Word Searching
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={WordSearch}
                                    alt="Word Searching"
                                />
                            </NavLink>
                            <p> A word search, word find, word seek, word sleuth or mystery word puzzle is a word game that consists of the letters of words placed in a grid, which usually has a rectangular or square shape. The objective of this puzzle is to find and mark all the words hidden inside the box.</p>
                        </div>
                        <div className="col-sm-4 col-6">
                            <NavLink to="/pathfinder">
                            <p className="text-dark thumb-title h3">
                                    Path Finding
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={PathThumb}
                                    alt="Path Finding"
                                />
                                {/* <p className="text-dark thumb-title">
                                    Path Finding
                                </p> */}
                            </NavLink>
                            <p> defination of word Search to be added</p>
                        </div>
                        <div className="col-sm-4 col-6">
                            <NavLink to="/sorting">
                            <p className="text-dark thumb-title h3">
                                    Sorting Visualiser
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={SortingThumb}
                                    alt="Sorting"
                                />
                                {/* <p className="text-dark thumb-title">
                                    Sorting Visualiser
                                </p> */}
                            </NavLink>
                            <p> defination of word Search to be added</p>
                        </div>
                        <div className="col-sm-4 col-6">
                            <NavLink to="/n-queens-problem">
                            <p className="text-dark thumb-title h3">
                                    NQueens Problem
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={NQueensThumb}
                                    alt="NQueens"
                                />
                                {/* <p className="text-dark thumb-title">
                                    NQueens Problem
                                </p> */}
                            </NavLink>
                            <p> defination of word Search to be added</p>
                        </div>
                        <div className="col-sm-4 col-6">
                            <NavLink to="/linear-search">
                            <p className="text-dark thumb-title h3">
                                    Linear Search
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={LinearThumb}
                                    alt="Linear Search"
                                />
                                {/* <p className="text-dark thumb-title">
                                    Linear Search
                                </p> */}
                            </NavLink>
                            <p> defination of word Search to be added</p>
                        </div>
                        <div className="col-sm-4 col-6">
                            <NavLink to="/binary-search">
                            <p className="text-dark thumb-title h3">
                                    Binary Search
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={BinaryThumb}
                                    alt="Binary Search"
                                />
                                {/* <p className="text-dark thumb-title">
                                    Binary Search
                                </p> */}
                            </NavLink>
                            <p> defination of word Search to be added</p>
                        </div>
                        <div className="col-sm-4 col-6">
                            <NavLink to="/rat-in-a-maze">
                            <p className="text-dark thumb-title h3">
                                    Rat In A Maze
                                </p>
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={RatThumb}
                                    alt="Rat In A Maze"
                                />
                                {/* <p className="text-dark thumb-title">
                                    Rat In A Maze
                                </p> */}
                            </NavLink>
                            <p> defination of word Search to be added</p>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}
