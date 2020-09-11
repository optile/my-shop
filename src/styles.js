export default ({ spacing, palette, typography }) => ({
  "@global": {
    body: {
      margin: 0,
    },
  },
  divider: {
    marginTop: spacing(2),
    paddingTop: spacing(1),
    marginBottom: spacing(1),
    fontSize: typography.h5.fontSize,
    borderTop: `1px solid ${palette.grey[300]}`,
  },
  marginLeft: {
    marginLeft: spacing(1),
  },
  paddingTop: {
    paddingTop: spacing(3),
  },
  margin: {
    marginTop: spacing(2),
    marginBottom: spacing(2),
    "& > svg": {
      fontSize: spacing(4),
      marginLeft: spacing(1),
    },
  },
  table: {
    display: "block",
    overflow: "auto",
  },
  avatar: {
    height: spacing(3),
    width: spacing(3),
    marginRight: spacing(1),
    fontSize: "0.8em",
  },
  grid: {
    display: "flex",
  },
  alignBottom: {
    alignItems: "flex-end",
  },
  colorContainer: {
    display: "flex",
    "& > p": {
      width: "40px",
      marginRight: spacing(1 / 2),
      lineHeight: "40px",
      textAlign: "center",
    },
  },
  root: {
    flexGrow: 1,
  },
  cardButton: {
    marginRight: spacing(2),
  },
  mainTitle: {
    flexGrow: 1,
  },
  cardMedia: {
	  height: "200px",
	  width: "100%"
  }
});
