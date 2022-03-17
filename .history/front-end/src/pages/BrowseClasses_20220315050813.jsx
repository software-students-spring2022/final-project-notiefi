import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BrowseClassCard from '@/components/BrowseClassCard';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

function BrowseClasses(props) {
  const router = useRouter();

  const classes = [
    { classCode: 'CSCI-UA.0101', name: 'Introduction to Computer Science', color: 'bg-teal-300', hover: 'bg-teal-200'},
    { classCode: 'CSCI-UA.0201', name: 'Computer Systems Organization', color: 'bg-cyan-300', hover: 'bg-cyan-200'},
    { classCode: 'CSCI-UA.0465', name: 'Introduction to Robotics', color: 'bg-indigo-300', hover: 'bg-indigo-200'},
    { classCode: 'CSCI-UA.0478', name: 'Introduction to Cryptography', color: 'bg-pink-300', hover: 'bg-pink-200'}
  ];

  return (
    <div>
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <div class="max-w-screen-lg mx-auto p-4 mt-20">
        <div class="grid grid-cols-[repeat(4,_minmax(200px,_1fr))] gap-4 mt-12 h-1/3">
          {classes.map( (c, i) => <BrowseClassCard key={i.toString()} classCode={c.classCode} name={c.name} color={c.color} hover={c.hover}/>)}
        </div>
      </div>
    </div>
  );
}

BrowseClasses.propTypes = {};
export default BrowseClasses;