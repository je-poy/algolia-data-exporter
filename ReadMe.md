# algolia-data-exporter

Index data Node.js exporter for Algolia.

## Installation

```bash
git clone https://github.com/je-poy/algolia-data-exporter.git
npm install
```

## Usage

1. Add `.env` on the root dir containing the code below with preferred values.
```dotenv
ALGOLIA_APPID=
ALGOLIA_ADMINKEY=
ALGOLIA_INDEX=
EXTRACT_PATH=./data <change on your own desire>
TIMEZONE=<momenttimezone of your preference>
```

2. Add extraction folder on the root dir. Used the value from your `.env` as folder name.
3. Run `npm start`.
4. Navigate to your extraction folder and check the file named `<current_date>-<index>.json`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Notes
[Exporting the index - Algolia](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/export-an-algolia-index/?client=javascript)
