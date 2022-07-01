import { Employee } from '../types';
import { filterData } from './FilterData';
import testMock from '../mock/test-mock.json';

describe('filterData function', () => {
	test('should return same as input', () => {
		const employee: Employee = testMock[0];
		const result = filterData(employee, '', 'name');
		expect(result).toStrictEqual(employee);
	});

	test('should return only second guy', () => {
		const employeeOne: Employee = testMock[0];
		const employeeTwo: Employee = testMock[1];
		const resultOne = filterData(employeeOne, 'second', 'name');
		expect(resultOne).toBeFalsy();
		const resultTwo = filterData(employeeTwo, 'second', 'name');
		expect(resultTwo).toBe(true);
	});

	test('should return both', () => {
		const employeeOne: Employee = testMock[0];
		const employeeTwo: Employee = testMock[1];
		const resultOne = filterData(employeeOne, 'Lund', 'office');
		expect(resultOne).toBe(true);
		const resultTwo = filterData(employeeTwo, 'Lund', 'office');
		expect(resultTwo).toBe(true);
	});

	test('should default both', () => {
		const employeeOne: Employee = testMock[0];
		const employeeTwo: Employee = testMock[1];
		const resultOne = filterData(employeeOne, 'Lund', 'github');
		expect(resultOne).toStrictEqual(employeeOne);
		const resultTwo = filterData(employeeTwo, 'Lund', 'linkedin');
		expect(resultTwo).toStrictEqual(employeeTwo);
	});
});
