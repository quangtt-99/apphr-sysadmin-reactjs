import React, { useState } from 'react';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react/lib/FlexibleColumnLayout';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { RatingIndicator } from '@ui5/webcomponents-react/lib/RatingIndicator';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { Text } from '@ui5/webcomponents-react/lib/Text';

const FCLLayout = {
  OneColumn: 'OneColumn',
  TwoColumnsStartExpanded: 'TwoColumnsStartExpanded',
  TwoColumnsMidExpanded: 'TwoColumnsMidExpanded',
  ThreeColumnsMidExpanded: 'ThreeColumnsMidExpanded',
  ThreeColumnsEndExpanded: 'ThreeColumnsEndExpanded',
  ThreeColumnsStartExpandedEndHidden: 'ThreeColumnsStartExpandedEndHidden',
  ThreeColumnsMidExpandedEndHidden: 'ThreeColumnsMidExpandedEndHidden',
  MidColumnFullScreen: 'MidColumnFullScreen',
  EndColumnFullScreen: 'EndColumnFullScreen',
};

function Mail() {
  const movieData = [
    {
      movie: 'Shanghai',
      genre: 'Crime|Thriller',
      country: 'Russia',
    },
    {
      movie: 'Punk Syndrome, The (Kovasikajuttu)',
      genre: 'Documentary',
      country: 'Poland',
    },
    {
      movie: 'Corridors of Blood',
      genre: 'Crime|Drama|Horror|Thriller',
      country: 'Germany',
    },
    {
      movie: 'Three Faces East',
      genre: 'Drama|Mystery|War',
      country: 'Russia',
    },
    {
      movie: 'Grave Secrets (Silent Screams)',
      genre: 'Horror',
      country: 'Russia',
    },
    {
      movie: 'Dead Outside, The',
      genre: 'Horror|Mystery|Thriller',
      country: 'Poland',
    },
    {
      movie: 'Cosmos',
      genre: 'Documentary',
      country: 'Russia',
    },
    {
      movie: 'UHF',
      genre: 'Comedy',
      country: 'Mexico',
    },
    {
      movie: 'Superweib, Das',
      genre: 'Comedy',
      country: 'Poland',
    },
    {
      movie: "It's Good to Be Alive",
      genre: 'Drama',
      country: 'Belarus',
    },
    {
      movie: 'Last Action Hero',
      genre: 'Action|Adventure|Comedy|Fantasy',
      country: 'Russia',
    },
    {
      movie:
        "Nibelungen: Kriemhild's Revenge, Die (Die Nibelungen: Kriemhilds Rache)",
      genre: 'Adventure|Drama|Fantasy',
      country: 'Russia',
    },
    {
      movie: 'Roller Boogie',
      genre: 'Drama',
      country: 'Brazil',
    },
    {
      movie: "Amore (L'Amore)",
      genre: 'Drama',
      country: 'Poland',
    },
    {
      movie: 'Dust of Time, The',
      genre: 'Drama',
      country: 'Poland',
    },
    {
      movie: 'Far Side of the Moon, The (Face cachée de la lune, La)',
      genre: 'Drama',
      country: 'Brazil',
    },
    {
      movie: 'Take Care of Your Scarf, Tatiana (Pidä huivista kiinni, Tatjana)',
      genre: 'Comedy',
      country: 'Poland',
    },
    {
      movie: 'Trail Beyond, The',
      genre: 'Action|Adventure|Western',
      country: 'Russia',
    },
    {
      movie: "Mood Indigo (L'écume des jours)",
      genre: 'Drama|Fantasy',
      country: 'Russia',
    },
    {
      movie: 'Alpha and Omega',
      genre: 'Adventure|Animation|Children|Comedy|Romance',
      country: 'France',
    },
    {
      movie: 'Battleship Potemkin',
      genre: 'Drama|War',
      country: 'United Kingdom',
    },
    {
      movie: 'Rites of May, The (Itim) ',
      genre: 'Drama|Horror|Thriller',
      country: 'Brazil',
    },
    {
      movie: "Black Waters of Echo's Pond, The",
      genre: 'Fantasy|Horror|Thriller',
      country: 'France',
    },
    {
      movie: 'Speed',
      genre: 'Action|Romance|Thriller',
      country: 'Brazil',
    },
    {
      movie: 'Ladybird Ladybird',
      genre: 'Drama',
      country: 'Poland',
    },
    {
      movie: 'War, Inc.',
      genre: 'Comedy|Crime|Thriller',
      country: 'Brazil',
    },
    {
      movie: 'Company of Heroes',
      genre: 'Action|War',
      country: 'United States',
    },
    {
      movie: 'Secret Glory, The',
      genre: 'Documentary',
      country: 'Poland',
    },
    {
      movie: 'Three Musketeers, The',
      genre: 'Action|Adventure|Romance',
      country: 'France',
    },
    {
      movie: 'Secrets of the Heart (Secretos del Corazón)',
      genre: 'Drama',
      country: 'Japan',
    },
  ];
  const castData = [
    {
      name: 'Clywd Gimeno',
      gender: 'Male',
    },
    {
      name: 'Essie Gadson',
      gender: 'Female',
    },
    {
      name: 'Claresta Greger',
      gender: 'Female',
    },
    {
      name: 'Susanne Pinson',
      gender: 'Female',
    },
    {
      name: 'Gardener Cutford',
      gender: 'Male',
    },
    {
      name: 'Red Swyer-Sexey',
      gender: 'Male',
    },
    {
      name: 'Alyson Bachellier',
      gender: 'Female',
    },
    {
      name: 'Amata Penke',
      gender: 'Female',
    },
    {
      name: 'Ancell Aprahamian',
      gender: 'Male',
    },
    {
      name: 'Kimmy Sworne',
      gender: 'Female',
    },
    {
      name: 'Liam Umpleby',
      gender: 'Male',
    },
    {
      name: 'Caleb Trathen',
      gender: 'Male',
    },
    {
      name: 'Starlin Kibard',
      gender: 'Female',
    },
    {
      name: 'Keefe Brammall',
      gender: 'Male',
    },
    {
      name: 'Terrill Reeme',
      gender: 'Male',
    },
    {
      name: 'Gerianne Maciejak',
      gender: 'Female',
    },
    {
      name: 'Wilhelmine Cutmare',
      gender: 'Female',
    },
    {
      name: 'Rodie Breukelman',
      gender: 'Female',
    },
    {
      name: 'Eduard Berk',
      gender: 'Male',
    },
    {
      name: 'Phil Koppens',
      gender: 'Female',
    },
  ];
  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedMovie, setSelectedMovie] = useState(movieData[0]);
  const [selectedCast, setSelectedCast] = useState(castData[0]);

  const onStartColumnClick = (e) => {
    setSelectedMovie(
      movieData.find((item) => item.movie === e.detail.item.dataset.movie)
    );
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  const onMiddleColumnClick = (e) => {
    setSelectedCast(
      castData.find((item) => item.name === e.detail.item.dataset.name)
    );
    setLayout(FCLLayout.ThreeColumnsEndExpanded);
  };

  return (
    <FlexibleColumnLayout
      style={{
        height: 800,
      }}
      layout={layout}
      startColumn={
        <List headerText="Movies" onItemClick={onStartColumnClick}>
          {movieData.map((item) => (
            <StandardListItem description={item.genre} data-movie={item.movie}>
              {item.movie}
            </StandardListItem>
          ))}
        </List>
      }
      midColumn={
        <>
          <Toolbar design="Solid">
            <Title>{selectedMovie.movie}</Title>
            <ToolbarSpacer />
            <Button
              icon="decline"
              design="Transparent"
              onClick={() => {
                setLayout(FCLLayout.OneColumn);
              }}
            />
          </Toolbar>
          <Toolbar
            style={{
              height: '200px',
            }}
          >
            <Avatar
              icon="video"
              size="XL"
              style={{
                marginLeft: '12px',
              }}
            />
            <FlexBox
              direction="Column"
              style={{
                marginLeft: '6px',
              }}
            >
              <FlexBox>
                <Label>Movie:</Label>
                <Text
                  style={{
                    marginLeft: '2px',
                  }}
                >
                  {selectedMovie.movie}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Genre:</Label>
                <Text
                  style={{
                    marginLeft: '2px',
                  }}
                >
                  {selectedMovie.genre}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Country:</Label>
                <Text
                  style={{
                    marginLeft: '2px',
                  }}
                >
                  {selectedMovie.country}
                </Text>
              </FlexBox>
            </FlexBox>
            <RatingIndicator
              style={{
                marginLeft: '100px',
              }}
              value={Math.floor(Math.random() * 5) + 1}
            />
          </Toolbar>
          <List headerText="Cast" onItemClick={onMiddleColumnClick}>
            {castData.map((item) => (
              <StandardListItem description={item.gender} data-name={item.name}>
                {item.name}
              </StandardListItem>
            ))}
          </List>
        </>
      }
      endColumn={
        <>
          <Toolbar design="Solid">
            <Title>{selectedCast.name}</Title>
            <ToolbarSpacer />
            <Button
              icon="decline"
              design="Transparent"
              onClick={() => {
                setLayout(FCLLayout.TwoColumnsMidExpanded);
              }}
            />
          </Toolbar>
          <Card
            avatar={<Avatar icon="person-placeholder" />}
            heading={selectedCast.name}
            subheading={`age: ${Math.floor(
              Math.random() * (75 - 18 + 1) + 18
            )}`}
            status={selectedCast.gender}
          >
            <div>
              <Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </div>
          </Card>
        </>
      }
    />
  );
}

export default Mail;
