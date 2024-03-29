import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 14,
  },
  categoryView: {
    backgroundColor: '#F5F5F5',
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'black',
  },
  titleView: {
    padding: 14,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  },
  childStyle: {
    fontSize: 14,
    marginLeft: 16,
    color: '#000000',
  },
  node: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  sectionView: {
    marginBottom: 7,
  },
});
