const text = {
  fontSize: 30,
  textAlign: 'center',
}

export default {
  text,
  boldText: {
    ...text,
    fontWeight: 'bold',
  },
  card :{
    marginTop: '10%',
    borderWidth: 3,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    padding: 20,
  },
}
